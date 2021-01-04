import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Lottie, { Options } from 'react-lottie';

import animationData from '../../../animations/technologyAnimation/data.json';

export const TechnologyBlock: React.FC = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction={matchesMd ? "column" : "row"}>
            <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                <Grid item>
                    <Typography variant="h4" gutterBottom align={matchesMd ? "center" : "right"}>Technology</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align={matchesMd ? "center" : "right"}>
                        In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesMd ? "center" : "right"}>
                        Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesMd ? "center" : "right"}>
                        Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesMd ? "center" : "right"}>
                        This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesMd ? "center" : "right"}>
                        These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesMd ? "center" : "right"}>
                        This puts personalization in your pocket — faster, better, and more affordable than ever before.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container justify={matchesMd ? "center" : "flex-end"} alignContent={matchesMd ? "center" : undefined} lg>
                <Lottie options={defaultOptions} style={{maxWidth: "45em", margin: 0}}/>
            </Grid>
        </Grid>
    )
}