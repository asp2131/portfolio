import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Three from './Components/Three/Music'
import { Avatar, Icon } from 'antd';
import FadeIn from 'react-fade-in';
import './App.css';

function App(props) {

    const [view, setView] = useState('Music');

    const changeView = (newView) => {
      setView(newView);
    }


    if(view === "Music"){
      return (
        <div>
          <div className="home-logo">
            <Avatar
              size={130}
              src={require('./assets/pluck.png')}
              className={"home-logo"} />
            <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue' }}>
              tune.
                </div>
          </div>
          <Navbar changeView={changeView}/>
          <div style={{ paddingTop: '64px' }}>
            <FadeIn transitionDuration={800}>
              <Three />
            </FadeIn>
          </div>
        </div>
      );
    } else if(view === 'Gallery'){
      return (
      <div>
        <div className="home-logo">
          <Avatar
            size={130}
              src={require('./assets/pluck.png')}
            className={"home-logo"} />
          <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue' }}>
            tune.
                </div>
        </div>
        <Navbar changeView={changeView}/>
        <div style={{ paddingTop: '64px' }}>
            <FadeIn>
              {/* <Three /> */}
            </FadeIn>
        </div>
      </div>
      )
    } else {
      return (
      <div>
        <div className="home-logo">
          <Avatar
            size={130}
              src={require('./assets/pluck.png')}
            className={"home-logo"} />
          <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue' }}>
            tune.
                </div>
        </div>
        <Navbar changeView={changeView}/>
        <div style={{ paddingTop: '64px' }}>
            <FadeIn>
              {/* <Three /> */}
            </FadeIn>
        </div>
      </div>
      )
    }
}

export default App;
