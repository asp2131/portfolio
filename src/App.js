import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Music from './Components/Tabs/Music'
import Home from './Components/Tabs/Home'
import Gallery from './Components/Tabs/Gallery'
import ThreeScene from './Components/Anime'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar, Icon } from 'antd';
import IconButton from "@material-ui/core/IconButton";
import FadeIn from 'react-fade-in';
import Footer from 'rc-footer';
import Anime, { anime } from 'react-anime';
import { MTLModel, OBJModel, DirectionLight } from 'react-3d-viewer'
import CardActionArea from "@material-ui/core/CardActionArea";
import './App.css';

function App(props) {

    const [view, setView] = useState('Home');
  var updates = 0;

    const changeView = (newView) => {
      setView(newView);
    }

    if(view === "Home"){
      return (
        <Home changeView={changeView}/>
      )
    }
    if(view === "Music"){
      return (
        <Music changeView={changeView}/>
      );
    } else if(view === 'Gallery'){
      return (
      
        <Gallery changeView={changeView}/>
       
      )
    } 
}

export default App;
