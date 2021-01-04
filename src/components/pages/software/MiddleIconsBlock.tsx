import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import lightbulb from '../../../assets/bulb.svg';
import cash from '../../../assets/cash.svg';
import stopwatch from '../../../assets/stopwatch.svg';

const useStyles = makeStyles(theme => ({
    iconContainer: {
        maxWidth: "40em",
        [theme.breakpoints.down('sm')]: {
            marginTop: "10em",
            marginBottom: "10em"
        }
    }
}));

export const MiddleIconsBlock: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center">
            <Grid item container direction="column" md alignItems="center" className={classes.iconContainer}>
                <Grid item>
                    <Typography variant="h4">Save Energy</Typography>
                </Grid>
                <Grid item>
                    <img src={lightbulb} alt="lightbulb"/>
                </Grid>
            </Grid>
            
            <Grid item container direction="column" md alignItems="center" className={classes.iconContainer}>
                <Grid item>
                    <Typography variant="h4">Save Time</Typography>
                </Grid>
                <Grid item>
                    <img src={stopwatch} alt="stopwatch"/>
                </Grid>
            </Grid>
            
            <Grid item container direction="column" md alignItems="center" className={classes.iconContainer}>
                <Grid item>
                    <Typography variant="h4">Save Money</Typography>
                </Grid>
                <Grid item>
                    <img src={cash} alt="cash"/>
                </Grid>
            </Grid>
        </Grid>
    )
};