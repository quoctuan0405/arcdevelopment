import React from "react";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { AnimationBlock } from "./AnimationBlock";
import { MiddleIconsBlock } from "./MiddleIconsBlock";
import { IntroductionBlock } from "./IntroductionBlock";
import { RootAnalysisBlock } from "./RootAnalysisBlock";
import { SecondAnimationBlock } from "./SecondAnimationBlock";
import { CallToAction } from "../../ui/CallToAction";

const useStyles = makeStyles(theme => ({
    blockContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
}));

export const CustomSoftwarePage: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container direction="column">
            <Grid item className={classes.blockContainer} style={{marginTop: matchesXs ? "1em" : "2em"}}>
                <IntroductionBlock/>
            </Grid>

            <Grid item className={classes.blockContainer} style={{marginTop: "15em", marginBottom: "20em"}}>
                <MiddleIconsBlock/>
            </Grid>

            <Grid item className={classes.blockContainer}>
                <AnimationBlock/>
            </Grid>

            <Grid item className={classes.blockContainer}>
                <RootAnalysisBlock/>
            </Grid>

            <Grid item className={classes.blockContainer} style={{marginBottom: matchesXs ? "10em" : "20em"}}>
                <SecondAnimationBlock/>
            </Grid>

            <Grid item>
                <CallToAction/>
            </Grid>
        </Grid>
    );
}