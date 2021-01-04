import React from "react"
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"

import Lottie, { Options } from 'react-lottie';
import animationData from '../../../animations/automationAnimation/data.json';

export const Automation: React.FC = () => {
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
            <Grid item md container direction="column">
                <Grid item>
                    <Typography variant="h4" align={matchesSm ? "center" : undefined}>Automation</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                        Why waste time when you don't have to?
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                        We can help you identify processes with time or event based on actions which now can now easily be automated.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                        Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md>
                <Lottie options={defaultOptions} style={{maxHeight: 290, maxWidth: 285}}/>
            </Grid>
        </Grid>
    )
}