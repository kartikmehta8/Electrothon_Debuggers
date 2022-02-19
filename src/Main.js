import React, { useEffect, useState } from 'react';
import NewsCards from './components/NewsCards/NewsCards.component';
import alanBtn from '@alan-ai/alan-sdk-web';
// import useStyles from './app.styles.js';
import wordsToNumbers from 'words-to-numbers';
import Modal from './components/Modal/Modal.component';
// import { Typography } from '@material-ui/core';
import './App.css';
import Lottie from "lottie-react";
import news from './news.json';
import woman from './tem.json';

export default function Main ()  {
  // const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const alanKey =
    '71d82f44a6ce63b5d610608f6aad42102e956eca572e1d8b807a3e2338fdd0dc/stage';
  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newsHeadlines') {
          // console.log('these are the articles: ', articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevactiveArticle) => prevactiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again!');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening');
          } else {
            alanBtn().playText('Please try that again!');
          }
        }
      },
      onConnectionStatus: async function (status) {
        if (status === 'authorized') {
          await alanBtnInstance.activate();
          alanBtnInstance.playText(
            'Welcome to the APK NEWS APP by Team Debuggers. Try searching news or visit slash creators to know more about creators of this app.'
          );
        }
      },
    });
  }, []);

  // <img src={AlanLogo} className={classes.alanLogo} alt='Alan Logo' />
  return (
    <div>
      <div>
        {/* {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant='h5' component='h2' style={{ fontSize: 15 }}>
                Try saying: <br />
                <br />
                Open the article number 2 or 3 or 4 etc
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant='h5' component='h2' style={{ fontSize: 15 }}>
                Try saying: <br />
                <br />
                Go back
                <br />
                or
                <br />
                Give me the Instructions
              </Typography>
            </div>
          </div>
        ) : null} */}
        <div className="bg-gray-500 text-3xl text-white py-2 flex justify-center nav">
          APK NEWS
        </div>
        {/* <img src={AlanLogo} className={classes.alanLogo} alt='logo' /> */}
        <div className="grid grid-cols-1 gap-2 md:ml-4 md:grid-cols-2 lg:grid-cols-2 mx-4 mb-8 lg:pr-8 md:pr-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cold-2">
            <div className="flex justify-center">
            <Lottie className="lg:m-8 md:m-8 m-6" animationData={news} style={{height:"200px",width:"200px"}} loop={true} />
            </div>
            <div className="grid grid-cols-1">
            <div className="flex justify-center nav text-xl mt-8 lg:mt-16  text-gray-700">Voice controlled News Website</div>
            <div className="block justify-center con-font" style={{textAlign: "center", fontSize: "14px"}}>A website controlled with voice instructions to fetch the latest news on various topics, categories, and genres. You simply have to click the "speak" button and give the command. The rest is magic!</div>
            </div>
            </div>
          <div> 
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cold-2">
            <div className="flex justify-center">
            <Lottie className="lg:m-8 md:m-8 m-6" animationData={woman} style={{height:"180px",width:"180px"}} />
            </div>
            <div className="mt-8 lg:mt-12 grid grid-cols-1">
              <div className="flex justify-center nav text-xl text-gray-700">EMBEDDED WITH THE SUPERPOWERS OF ALAN AI</div>
              <div className="block justify-center con-font" style={{textAlign: "center", fontSize: "14px"}}>Alan is an end-to-end conversational AI platform to build robust and reliable in-app voice assistants and chatbots. There is no need to create spoken language models, train the speech recognition software, deploy and host voice components — the Alan AI backend does the bulk of work.</div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

