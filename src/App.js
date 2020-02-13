import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { Avatar, Icon } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="home-logo">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={"home-logo"}/>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
