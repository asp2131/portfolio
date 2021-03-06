import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import Navbar from '../Navbar/'
import ThreeScene from '../Anime'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar, Icon } from 'antd';
import IconButton from "@material-ui/core/IconButton";
import Footer from 'rc-footer';
import Anime, { anime } from 'react-anime';
import CardActionArea from "@material-ui/core/CardActionArea";
import FadeIn from 'react-fade-in';
import '../Home.css'


let height = 800;
let width = 800;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 'auto',
        width: '100%'
    },
    control: {
        padding: theme.spacing(0)
    }
}));

    

function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const [shown1, setShown1] = React.useState(false);
    const [shown2, setShown2] = React.useState(false);
    const [demension, setDemension] = React.useState({ height: height, width: width });
    const classes = useStyles();

    const images = [];

    return (
        <FadeIn transitionDuration={500}>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>

                        <Grid item>
                            
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "24px" }}>
                                    <img src={require('../../assets/gallery1.jpg')} style={{ width: '50%', height: '50%' }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={require('../../assets/gallery2.jpeg')} style={{ width: '50%', height: '50%' }} />
                                </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} />
            </Grid>
        </FadeIn>
    );
}

export default function GalleryView(props) {
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
            {/* <Player /> */}
            <div style={{ paddingTop: '64px' }}>
                <FadeIn transitionDuration={800}>
                    <SpacingGrid />
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