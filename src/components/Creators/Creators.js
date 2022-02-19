import React from 'react'
import Lottie from "lottie-react";
import girl from "./girl.json";
import aviral from "./aviral.json";
import mehta from "./mehta.json";
import "./creator.css";
import { SocialIcon } from "react-social-icons";

export default function Creators() {
  return (
    <div><div className="bg-gray-500 text-3xl text-white py-2 flex justify-center nav">
    APK NEWS
  </div>
  <div className="lg:p-8 grid grid-cols-1 lg:grid-cols-3 mt-8">
    <div  className="grid justify-center">
        <div style={{height:"250px", width: "250px"}}>
            <Lottie animationData = {aviral} loop={true} />
        </div>
        <div className="flex justify-center text-lg font-bold text-gray-800 con-font">AVIRAL SRIVASTAVA</div>
        <div className="flex justify-center mt-4 mb-8"> 
        <SocialIcon
                                    url="https://github.com/godofgeeks23"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
        <SocialIcon
                                    url="https://www.linkedin.com/in/aviral-srivastava-07b1a4202/"
                               
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
        </div>
    </div>
    <div  className="grid justify-center">
        <div style={{height:"250px", width: "250px"}}>
            <Lottie animationData = {girl} loop={true} />
        </div>
        <div className="flex justify-center text-lg font-bold text-gray-800 con-font">PRERNA CHOUDHARY</div>
        <div className="flex justify-center mt-4 mb-8"> 
        <SocialIcon
                                    url="https://github.com/PRERNA-CHOUDHARY"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
        <SocialIcon
                                    url="https://www.linkedin.com/in/prerna-choudhary-31837a1bb/"
                               
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
        </div>
    </div>
    <div  className="grid justify-center">
        <div style={{height:"250px", width: "250px"}} className="mb-4">
            <Lottie animationData = {mehta} loop={true} />
        </div>
        <div className="flex justify-center text-lg font-bold text-gray-800 con-font">KARTIK MEHTA</div>
        <div className="flex justify-center mt-4 mb-12"> 
        <SocialIcon
                                    url="https://github.com/kartikmehta8"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
        <SocialIcon
                                    url="https://www.linkedin.com/in/kartikmehta17/"
                               
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
        </div>
    </div>
  </div>
  </div>
  )
}
