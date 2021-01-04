import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core"

import { ProcessBlock } from "./ConsultationBlock"
import { FirstReviewBlock } from "./FirstReviewBlock";
import { MockupBlock } from "./MockupBlock";
import { TechnologyBlock } from "./TechonologyBlock"
import { VisionBlock } from "./VisionBlock";
import { DesignBlock } from "./DesignBlock";
import { SecondReviewBlock } from "./SecondReviewBlock";
import { BuildBlock } from "./BuildBlock";
import { LaunchBlock } from "./LaunchBlock";
import { MaintainBlock } from "./MaintainBlock";

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

export const RevolutionPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item className={classes.blockContainer} style={{marginTop: "2em"}}>
                <Typography variant="h2" style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
            </Grid>

            <Grid item className={classes.blockContainer} style={{marginTop: "5em"}}>
                <VisionBlock/>
            </Grid>

            <Grid item className={classes.blockContainer} style={{marginTop: "10em", marginBottom: "10em"}}>
                <TechnologyBlock/>
            </Grid>

            <Grid item className={classes.blockContainer}>
                <Typography variant="h4" gutterBottom align="center">Process</Typography>
            </Grid>

            <Grid item>
                <ProcessBlock/>
            </Grid>

            <Grid item>
                <MockupBlock/>
            </Grid>

            <Grid item>
                <FirstReviewBlock/>
            </Grid>

            <Grid item>
                <DesignBlock/>
            </Grid>

            <Grid item>
                <SecondReviewBlock/>
            </Grid>

            <Grid item>
                <BuildBlock/>
            </Grid>

            <Grid item>
                <LaunchBlock/>
            </Grid>

            <Grid item>
                <MaintainBlock/>
            </Grid>
        </Grid>
    )
}