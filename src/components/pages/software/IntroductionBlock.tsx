import React from "react";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

import { routes } from "../../routes";
import { IntroductionBlockTemplate } from "../IntroductionBlockTemplate";

export const IntroductionBlock: React.FC = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    const paragraph = 
    <>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            Whether we're replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
        </Typography>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you do need, and ultimately controls the way you work.
            Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
        </Typography>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. The collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
        </Typography>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            We create exactly what you want, exactly how you want it.
        </Typography>
    </>

    return (
        <IntroductionBlockTemplate
            title="Custom Software Development"
            paragraph={paragraph}
            backArrowLink={routes.SERVICES.url}
            backArrowAlt="Back to Services Page"
            forwardArrowLink={routes.MOBILE_APPS.url}
            forwardArrowAlt="Forward to IOS/Android App Development Page"
        />
    )
}