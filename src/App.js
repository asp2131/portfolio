import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Three from './Components/Three/Three'
import { Avatar, Icon } from 'antd';
import './App.css';

function App(props) {



    return (
      <div>
        <div className="home-logo">
          <Avatar 
          size={130}
            src={require('./pluck.png')} 
          className={"home-logo"}/>
          <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily:'Helvetica Neue'}}>
            tune.
                </div>
        </div>
        <Navbar />
        <div style={{paddingTop: '64px'}}>
        <Three />
        </div>
      </div>
    );
}

export default App;
