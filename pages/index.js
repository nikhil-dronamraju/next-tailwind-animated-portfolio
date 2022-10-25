import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from '../components/Home';
import Aboutme from '../components/Aboutme';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Head from 'next/head'
import Script from 'next/script'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'KV86H-9Q6V7-5J267-841N9-DEUUR'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      const scrollDown = () => {fullpageApi.moveSectionDown()}
      const scrollUp = () => {fullpageApi.moveSectionUp()}
      const scrollTop = () => {fullpageApi.moveTo(1)}
      const scrollAbout = () => {fullpageApi.moveTo(2)}
      const scrollPortfolio = () => {fullpageApi.moveTo(3)}
      const scrollResume = () => {fullpageApi.moveTo(4)}
      return (
        <div>
        <Head>
          <title>Nikhil Dronamraju - Portfolio</title>
        </Head>
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home scrollDown={scrollDown} scrollTop={scrollTop} scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollResume={scrollResume}/>
          </div>
          <div className="section">
            <Aboutme scrollUp={scrollUp} scrollDown = {scrollDown} scrollTop={scrollTop} scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollResume={scrollResume}/>
          </div>
          <div className="section">
            <Portfolio scrollUp={scrollUp} scrollDown={scrollDown} scrollTop={scrollTop} scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollResume={scrollResume}/>
          </div>
          <div className="section">
            <Resume scrollUp={scrollUp} scrollTop={scrollTop} scrollAbout={scrollAbout} scrollPortfolio={scrollPortfolio} scrollResume={scrollResume}/>
          </div>
        </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);

export default Fullpage