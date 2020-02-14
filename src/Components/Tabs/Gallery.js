import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
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

export default function SpacingGrid() {
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
