import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Three from './Components/Three/Three'
import { Avatar, Icon } from 'antd';
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
              src={require('./pluck.png')}
              className={"home-logo"} />
            <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue' }}>
              tune.
                </div>
          </div>
          <Navbar changeView={changeView}/>
          <div style={{ paddingTop: '64px' }}>
            <Three />
          </div>
        </div>
      );
    } else if(view === 'Gallery'){
      return (
      <div>
        <div className="home-logo">
          <Avatar
            size={130}
            src={require('./pluck.png')}
            className={"home-logo"} />
          <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue' }}>
            tune.
                </div>
        </div>
        <Navbar changeView={changeView}/>
        <div style={{ paddingTop: '64px' }}>
          {/* <Three /> */}
        </div>
      </div>
      )
    } else {
      return (
      <div>
        <div className="home-logo">
          <Avatar
            size={130}
            src={require('./pluck.png')}
            className={"home-logo"} />
          <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue' }}>
            tune.
                </div>
        </div>
        <Navbar changeView={changeView}/>
        <div style={{ paddingTop: '64px' }}>
          {/* <Three /> */}
        </div>
      </div>
      )
    }
}

export default App;
