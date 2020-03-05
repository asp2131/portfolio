import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FaSoundcloud, FaSpotify, FaApple } from 'react-icons/lib/fa';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import FadeIn from 'react-fade-in';
import {message} from 'antd';
import '../Home.css'


let height = 310;
let width = 310;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: height,
    width: width
  },
  control: {
    padding: theme.spacing(0)
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const [shown1, setShown1] = React.useState(false);
  const [shown2, setShown2] = React.useState(false);
  const [demension, setDemension] = React.useState({height: height, width: width});
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  const handleResize = () => {
    setShown1(!shown1);
    // if(height === 310){
    //   height = 750
    //   width = 750
    // }
  }

  const handleResize2 = () => {
    setShown2(!shown2);
    // if (height === 310) {
    //   height = 750
    //   width = 750
    // }
  }

  return (
    <FadeIn>
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
         
            <Grid item>
            <Card className={classes.paper}  >
              <CardActionArea onClick={handleResize}>
              <div>
                <img src={require('../../assets/tokyo.jpg')} style={{width: 310, height: 310}}/>
                </div>
              </CardActionArea>
            </Card>
            <div>
              {shown1 ?
                  <FadeIn>
                <div  style={{
                  marginBottom: '16px'
                }}>
                  <p style={
                    {
                      display: 'flex',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '20x',
                      marginBottom: '4px',
                      marginTop: '6px',
                      color: 'white'
                    }}>{`tune. - TOKYO!`}</p>
                  <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '20x',
                    marginBottom: '6px',
                    color: 'white'
                  }}>Produced, Mixed, Wrote</p>
                  {/* <a href="https://open.spotify.com/track/5MCOgFwTZ0YovAtr1UwV6q"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '20x',
                      marginBottom: '4px'
                    }}>I produced this gem, listen here</a> */}
                      <CardActionArea onClick={() => window.location = "https://soundcloud.com/pilottune/tokyo"}>
                          <FaSoundcloud color="orange" width={300} height={50} style={{
                            display: 'flex',
                            justifyContent: 'center', }}/>
                      </CardActionArea>
                      <CardActionArea onClick={() => window.location = "https://open.spotify.com/track/5MCOgFwTZ0YovAtr1UwV6q"}>
                          <FaSpotify color="green" width={300} height={50} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: "14px"
                          }}/>
                      </CardActionArea>
                      <CardActionArea onClick={() => window.location = "https://music.apple.com/us/album/tokyo/1496383546?i=1496383561"}>
                          <FaApple color="white" width={300} height={40} style={{
                            display: 'flex',
                            justifyContent: 'center',
                          }} />
                      </CardActionArea>
                </div>
                    </FadeIn>
                : null
              }
            </div>
            </Grid>
          
          <Grid item>
            <Card className={classes.paper}  >
              <CardActionArea onClick={handleResize2}>
                  <img src={require('../../assets/TUNE_COVERART.jpg')} style={{ width: 310, height: 310 }} />
              </CardActionArea>
            </Card>
            {shown2 ?
                <FadeIn>
              <div>
        
                <p style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20x',
                  marginBottom: '4px',
                  marginTop: '6px',
                  color: 'white'
                }}>{`tune. - Come Vibe`}</p>
                <p style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20x',
                  marginBottom: '6px',
                  color: 'white'
                }}>Produced, Mixed, Wrote</p>
                    {/* <a href="https://open.spotify.com/album/4ty8peY5iZgCAKWMVwOihd"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '20x',
                        marginBottom: '4px'
                      }}>I produced this gem as well, listen here</a> */}
                    <CardActionArea onClick={() => message.warning('Coming soon!')}>
                      <FaSoundcloud color="orange" width={300} height={50} style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }} />
                    </CardActionArea>
                    <CardActionArea onClick={() => window.location = "https://open.spotify.com/album/4ty8peY5iZgCAKWMVwOihd"}>
                      <FaSpotify color="green" width={300} height={50} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: "14px"
                      }} />
                    </CardActionArea >
                    <CardActionArea onClick={() => window.location = "https://music.apple.com/us/album/comevibe-single/1499272488?uo=4&app=apple+music"}>
                      <FaApple color="white" width={300} height={40} style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }} />
                    </CardActionArea>
              </div>
                  </FadeIn>
              : null}
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12} />
    </Grid>
    </FadeIn>
  );
}
