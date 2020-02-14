import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Music from './Components/Tabs/Music'
import Gallery from './Components/Tabs/Gallery'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar, Icon } from 'antd';
import IconButton from "@material-ui/core/IconButton";
import FadeIn from 'react-fade-in';
import Footer from 'rc-footer';
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
              <Music />
            </FadeIn>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '64px' }}>
          <Footer 
            columns={[
              {
                icon: (
                  <IconButton onClick={() => { window.location.href ='https://www.instagram.com/tuneperiod/'}}>
                    <InstagramIcon fontSize="large"/>
                  </IconButton>
                ),
                title: '语雀'
              },
                {
                  icon: (
                    <IconButton onClick={() => { window.location.href ='https://twitter.com/pilottune' }}>
                      <TwitterIcon fontSize="large" color="action"/>
                    </IconButton>
                  ),
                  title: '语雀'
                }
            ]}
              bottom={``}
          />
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
              <Gallery />
            </FadeIn>
        </div>
          <Footer
            columns={[
              {
                icon: (
                  <IconButton onClick={() => { window.location.href ='https://www.instagram.com/tuneperiod/' }}>
                    <InstagramIcon fontSize="large"/>
                  </IconButton>
                ),
                title: '语雀',
                url: 'https://yuque.com',
                description: '知识创作与分享工具',
                openExternal: true,
              },
              {
                icon: (
                  <IconButton onClick={() => { window.location.href = 'https://twitter.com/pilottune' }}>
                    <TwitterIcon fontSize="large" color="action" />
                  </IconButton>
                ),
                title: '语雀'
              }
            ]}
            bottom=""
          />
      </div>
      )
    } 
}

export default App;
