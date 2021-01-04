import React from "react"
import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core"

import Lottie, { Options } from 'react-lottie';
import animationData from '../../../animations/documentsAnimation/data.js';

export const Documents: React.FC = () => {
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
                    <Typography variant="h4" align={matchesSm ? "center" : undefined}>
                        Digital Document & Data
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                        Reduce Errors. Reduce Waste. Reduce Costs.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                        Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                        By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md>
                <Lottie options={defaultOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}/>
            </Grid>
        </Grid>
    )
}