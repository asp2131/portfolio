import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Music from './Components/Tabs/Music'
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
// import { Entity } from 'react-360-cli';
import './App.css';

function App(props) {

    const [view, setView] = useState('Home');

    const changeView = (newView) => {
      setView(newView);
    }

    if(view === "Home"){
      return (
        <div>
          <div className="home-logo">

            <Anime rotate={'1turn'}
              // loop={true}
              translateX={20}
              duration={5000}
              easing={'easeInOutBounce'}
              
              >
              <Avatar
                size={130}
                src={require('./assets/pilot.png')}
                className={"home-logo"} />
            </Anime>
            <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue', color: 'white' }}>
              tune.
                </div>
          </div>
          <Navbar changeView={changeView} />
          <div style={{ paddingTop: '64px', display: 'flex', justifyContent: 'center' }} className={'content'}>
            <FadeIn transitionDuration={800}>
              <ThreeScene />
            </FadeIn>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '64px' }}>

            <Footer
              columns={[
                {
                  icon: (
                    <IconButton color="secondary" onClick={() => { window.location.href = 'https://www.instagram.com/tuneperiod/' }}>
                      <InstagramIcon fontSize="large" />
                    </IconButton>
                  ),
                  title: '语雀'
                },
                {
                  icon: (
                    <IconButton onClick={() => { window.location.href = 'https://twitter.com/pilottune' }}>
                      <TwitterIcon fontSize="large" color="secondary" />
                    </IconButton>
                  ),
                  title: '语雀'
                }
              ]}
              bottom={``}
            />
          </div>
        </div>
      )
    }
    if(view === "Music"){
      return (
        <div>
          <div className="home-logo">
            
            <Anime rotate={'1turn'}
              translateX={20}
              duration={5000}
              easing={'easeInOutBounce'}
              scale={[.75, .9  ]}
              >
              <Avatar
                size={130}
                src={require('./assets/pilot.png')}
                className={"home-logo"} />
            </Anime>
            <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue', color: 'white' }}>
              tune.
                </div>
          </div>
          <Navbar changeView={changeView}/>
          {/* <Player /> */}
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
                  <IconButton color="secondary" onClick={() => { window.location.href ='https://www.instagram.com/tuneperiod/'}}>
                    <InstagramIcon fontSize="large"/>
                  </IconButton>
                ),
                title: '语雀'
              },
                {
                  icon: (
                    <IconButton  onClick={() => { window.location.href ='https://twitter.com/pilottune' }}>
                      <TwitterIcon fontSize="large" color="secondary"/>
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
              src={require('./assets/pilot.png')}
            className={"home-logo"} />
            <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue',color: 'white' }}>
              tune.
                </div>
        </div>
        <Navbar changeView={changeView}/>
        <div style={{ paddingTop: '64px' }}>
            <FadeIn>
              <Gallery />
            </FadeIn>
        </div>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '64px' }}>
          <Footer
            columns={[
              {
                icon: (
                  <IconButton color="secondary" onClick={() => { window.location.href ='https://www.instagram.com/tuneperiod/' }}>
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
                  <IconButton color="secondary" onClick={() => { window.location.href = 'https://twitter.com/pilottune' }}>
                    <TwitterIcon fontSize="large" />
                  </IconButton>
                ),
                title: '语雀'
              }
            ]}
            bottom=""
          />
          </div>
      </div>
      )
    } 
}

export default App;
