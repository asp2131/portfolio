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
    const [demension, setDemension] = React.useState({ height: height, width: width });
    const classes = useStyles();

    const images = [];

    return (
        <FadeIn>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>

                        <Grid item>
                            <Card className={classes.paper}  >
                                <CardActionArea onClick={handleResize}>
                                    <div>
                                        <img src={require('../../tokyo.jpg')} style={{ width: 310, height: 310 }} />
                                    </div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} />
            </Grid>
        </FadeIn>
    );
}
