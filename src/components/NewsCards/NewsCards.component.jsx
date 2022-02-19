import React from 'react';
import NewsCard from '../NewsCard/NewsCard.component';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './NewsCards.styles.js';
import './style.css';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#1565c0',
    title: 'News by Categories',
    info:
      'BUSINESS ENTERTAINMENT GENERAL SCIENCE SPORTS TECHNOLOGY',
    text: 'Give me the latest Business news',
  },
  {
    color: '#4527a0',
    title: 'News by Terms',
    info: 'BITCOIN PLAYSTATION SMARTPHONE DONALD TRUMP',
    text: "Give me the news about Narendra Modi",
  },
  {
    color: '#283593',
    title: 'News by Sources',
    info: 'CNN WIRED BBC TIME IGN ABC NEWS',
    text: 'Give me the news from BBC',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={0}
        >
          {infoCards.map((infoCard, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <div className="con-font text-xl font-bold">{infoCard.title}</div>
                {infoCard.info ? (
                  <Typography variant='h6' style={{ fontSize: 15 }}>
                    <div className="con-font">{infoCard.info}</div>
                  </Typography>
                ) : null}
                <Typography variant='h6' style={{ fontSize: 15 }}>
                  <div className="text-sm">
                    <div className="con-font">
                      <i>{infoCard.text}</i>
                    </div>
                  </div>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
