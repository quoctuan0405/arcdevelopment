import React from "react";
import { Grid, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import swiss from '../../../assets/swissKnife.svg';
import access from '../../../assets/extendAccess.svg';
import engagement from '../../../assets/increaseEngagement.svg';

const useStyles = makeStyles(theme => ({
    iconContainer: {
        maxWidth: "40em",
        [theme.breakpoints.down('sm')]: {
            marginBottom: "10em"
        }
    },
    img: {
        maxWidth: "28em",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "20em",
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: "14em",
        }
    }
}));

export const IconsBlock: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container direction={matchesMd ? "column" : "row"} justify="center" alignItems="center" spacing={5}>
            <Grid item container direction="column" md alignItems="center" className={classes.iconContainer}>
                <Grid item>
                    <Typography variant="h4" align={matchesMd ? "center" : undefined}>Extend Functionality</Typography>
                </Grid>
                <Grid item>
                    <img src={swiss} alt="Swiss Knife" className={classes.img}/>
                </Grid>
            </Grid>
            
            <Grid item container direction="column" md alignItems="center" className={classes.iconContainer}>
                <Grid item>
                    <Typography variant="h4" align={matchesMd ? "center" : undefined}>Extend Access</Typography>
                </Grid>
                <Grid item>
                    <img src={access} alt="engagement" className={classes.img} style={{maxWidth: matchesXs ? "18em" : undefined}}/>
                </Grid>
            </Grid>
            
            <Grid item container direction="column" md alignItems="center" className={classes.iconContainer}>
                <Grid item>
                    <Typography variant="h4" align={matchesMd ? "center" : undefined}>Increase Engagement</Typography>
                </Grid>
                <Grid item>
                    <img src={engagement} alt="access" className={classes.img}/>
                </Grid>
            </Grid>
        </Grid>
    )
};