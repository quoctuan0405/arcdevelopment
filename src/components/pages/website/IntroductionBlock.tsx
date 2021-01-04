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
            Having a website is a necessity is today's business world. They give you one central, public location to let people know who you are, what you do, and why you're the best at it.
        </Typography>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            From simply having your hours posted to having full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customer.
        </Typography>
    </>

    return (
        <IntroductionBlockTemplate
            title="Website Development"
            paragraph={paragraph}
            backArrowLink={routes.MOBILE_APPS.url}
            backArrowAlt="Back to iOS/Android Page"
            forwardArrowLink={routes.SERVICES.url}
            forwardArrowAlt="Forward to services Page"
        />
    )
}