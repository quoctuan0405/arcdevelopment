import React from "react";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import { CallToAction } from "../../ui/CallToAction";
import { Position } from "../ServicesElementTemplate";
import { Analytics } from "./Analytics";
import { ECommerce } from "./ECommerce";
import { OutReach } from "./OutReach";
import { IntroductionBlock } from "./IntroductionBlock";
import { Seo } from "./Seo";

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

export const WebsiteDevelopmentPage: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container direction="column">
            <Grid item className={classes.blockContainer} style={{marginTop: matchesXs ? "1em" : "2em"}}>
                <IntroductionBlock/>
            </Grid>

            <Grid item style={{marginLeft: matchesSm ? 0 : "5em", marginTop: "7em"}}>
                <Analytics position={Position.LEFT}/>
            </Grid>

            <Grid item style={{marginRight: matchesSm ? 0 : "5em"}}>
                <ECommerce position={Position.RIGHT}/>
            </Grid>

            <Grid item style={{marginLeft: matchesSm ? 0 : "5em", marginTop: "7em"}}>
                <OutReach position={Position.LEFT}/>
            </Grid>

            <Grid item style={{marginRight: matchesSm ? 0 : "5em"}}>
                <Seo position={Position.RIGHT}/>
            </Grid>

            <Grid item>
                <CallToAction/>
            </Grid>
        </Grid>
    )
}