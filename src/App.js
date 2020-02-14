import React, { Component } from 'react';
import Navbar from './Components/Navbar'
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
      </div>
    );
}

export default App;
