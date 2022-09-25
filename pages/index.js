import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from '../components/Home';
import Aboutme from '../components/Aboutme';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      const scrollDown = () => {fullpageApi.moveSectionDown()}
      const scrollUp = () => {fullpageApi.moveSectionUp()}
      const scrollTop = () => {fullpageApi.moveTo(1)}
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home myFunction={scrollDown}/>
          </div>
          <div className="section">
            <Aboutme scrollDown={scrollDown} scrollUp={scrollUp}/>
          </div>
          <div className="section">
            <Portfolio scrollDown={scrollDown} scrollUp={scrollUp}/>
          </div>
          <div className="section">
            <Resume scrollUp={scrollUp} scrollTop={scrollTop}/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage