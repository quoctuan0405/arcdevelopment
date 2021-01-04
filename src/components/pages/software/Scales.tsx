import React from "react"
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"

import Lottie, { Options } from 'react-lottie';
import animationData from '../../../animations/scaleAnimation/data.json';

export const Scales: React.FC = () => {
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
                <Lottie options={defaultOptions} style={{maxHeight: 270, maxWidth: 280}}/>
            </Grid>
            <Grid item md container direction="column">
                <Grid item>
                    <Typography variant="h4" align={matchesSm ? "center" : "right"}>
                        Scale
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? "center" : "right"}>
                        Whether you're a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reability.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}