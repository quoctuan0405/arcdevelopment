import React from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import Lottie, { Options } from 'react-lottie';

import animationData from '../../../animations/integrationAnimation/data.json';

export const AnimationTextBlock: React.FC = () => {
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
        <Grid container direction={matchesSm ? "column" : "row"}>
            <Grid item container md direction="column">
                <Grid item>
                    <Typography variant="h4" align={matchesSm ? 'center' : undefined} gutterBottom>
                        Integration
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? 'center' : undefined} paragraph>
                        Our techonology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenience place.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? 'center' : undefined} paragraph>
                        This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item md>
                <Lottie options={defaultOptions} style={{maxWidth: "20em"}}/>
            </Grid>

            <Grid item container md direction="column">
                <Grid item>
                    <Typography variant="h4" align={matchesSm ? 'center' : "right"} gutterBottom>
                        Simultaneous Platform Support
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? 'center' : "right"} paragraph>
                        Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets - all at the same time.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? 'center' : "right"} paragraph>
                        This significantly reduces costs and creates more unified brand experience across all devices.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};