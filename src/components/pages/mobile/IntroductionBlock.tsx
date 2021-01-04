import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { routes } from '../../routes';
import { IntroductionBlockTemplate } from '../IntroductionBlockTemplate';

export const IntroductionBlock: React.FC = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

    const paragraph = 
    <>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            Mobile apps allow you to take your tools on the go.
        </Typography>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. 
            This opens you up to a whole new world of possibilities by taking advantage of phone features like camera, GPS, push notifications, and more.
        </Typography>
        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
            Convenience. Connection.
        </Typography>
    </>

    return (
        <IntroductionBlockTemplate
            title="iOS/Android App Development"
            paragraph={paragraph}
            backArrowLink={routes.CUSTOM_SOFTWARE.url}
            backArrowAlt="Back to Custom Software Page"
            forwardArrowLink={routes.WEBSITES.url}
            forwardArrowAlt="Forward to Websites Development Page"
        />
    );
}