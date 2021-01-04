import React from "react"
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"

import Lottie, { Options } from 'react-lottie';
import animationData from '../../../animations/uxAnimation/data.js';

export const UxDesign: React.FC = () => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container justify={matchesSm ? "center" : undefined}>
            <Grid item md>
                <Lottie options={defaultOptions} style={{maxHeight: 310, maxWidth: 155}}/>
            </Grid>
            <Grid item md container direction="column">
                <Grid item>
                    <Typography variant="h4" align={matchesSm ? "center" : "right"}>User Experience Design</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? "center" : "right"}>
                        A good design that isn't usable isn't a good design.
                    </Typography>
                    <Typography variant="body1" align={matchesSm ? "center" : "right"}>
                        So why are so many pieces of software complicated, confusing, and frustrating?
                    </Typography>
                    <Typography variant="body1" align={matchesSm ? "center" : "right"}>
                        By prioritizing users and the real ways they interact with technology we're able to develop unique, personal experiences rather than create new ones.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}