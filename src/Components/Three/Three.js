import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

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
              </Paper>
            </Grid>
          
          <Grid item>
            <Paper className={classes.paper} >
              <img src={require('../../TUNE_COVERART.jpg')} style={{ width: 310, height: 310 }} />
            </Paper>
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
}
