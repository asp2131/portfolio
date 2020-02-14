import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import color from "@material-ui/core/colors/amber";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 310,
    width: 310
  },
  control: {
    padding: theme.spacing(0)
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
         
            <Grid item>
              <Paper className={classes.paper} >
                <img src={require('../../tokyo.jpg')} style={{width: 310, height: 310}}/>
                <p style={
                          {
                          display: 'flex', 
                          justifyContent: 'center',
                          fontWeight: 'bold', 
                          fontSize: '20x', 
                          marginBottom: '4px',
                          marginTop: '6px'
                          }}>{`tune. - TOKYO!`}</p>
                <p style={{
                          display: 'flex',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '20x',
                          marginBottom: '16px'
                        }}>Produced, Mixed, Wrote</p>
              <a href="https://open.spotify.com/track/5MCOgFwTZ0YovAtr1UwV6q"
                style={{
                          display: 'flex',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '20x',
                          marginBottom: '16px'
                        }}>I produced this gem, listen here</a>
              </Paper>
            </Grid>
          
          <Grid item>
            <Paper className={classes.paper} >
              <img src={require('../../TUNE_COVERART.jpg')} style={{ width: 310, height: 310 }} />
              <p style={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '20x',
                marginBottom: '4px',
                marginTop: '6px'
              }}>{`tune. - Come Vibe`}</p>
              <p style={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '20x',
                marginBottom: '16px'
              }}>Produced, Mixed, Wrote</p>
              <p style={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '24x',
                marginBottom: '16px'
              }}>Coming Soon!</p>
            </Paper>
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
}
