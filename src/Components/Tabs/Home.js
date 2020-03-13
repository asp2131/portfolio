import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/'
import Gallery from './Gallery'
import ThreeScene from '../Anime'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar, Icon } from 'antd';
import IconButton from "@material-ui/core/IconButton";
import Footer from 'rc-footer';
import Anime, { anime } from 'react-anime';
import FadeIn from 'react-fade-in';
import { MTLModel, OBJModel, DirectionLight } from 'react-3d-viewer'
import CardActionArea from "@material-ui/core/CardActionArea";

export default function Home(props){
    let updates = 0;
    return (
        <div>
            <div className="home-logo">

                <Anime
                    loop={true}
                    translateX={1}
                    translateY={10}
                    duration={800}
                    easing={'easeInOutBack'}
                    direction={"alternate"}
                    loopBegin={(anim) => { updates++; }}
                    loopComplete={(anim) => { updates++; }}>
                    <CardActionArea onClick={() => props.changeView("Home")}>
                        <Avatar
                            size={130}
                            src={require('../../assets/pilot.png')}
                            className={"home-logo"}
                            onClick={() => props.changeView("Home")}
                        />
                    </CardActionArea>
                </Anime>
                <div style={{ marginBottom: '16px', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Helvetica Neue', color: 'white' }}>
                    tune.
                </div>
            </div>
            <Navbar changeView={props.changeView} />
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