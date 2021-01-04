import React from "react";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

import build from '../../../assets/buildIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";
import { CSSProperties } from "@material-ui/styles";

export const BuildBlock: React.FC = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    const title = "Build";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Here’s where we get down to business.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.', 'Each area is then developed in order of importance until ready to be connected to the next piece.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.
            </Typography>
        </>
    );
    const customImage = build;
    const alt = "handshake";
    const imageCustomCss: CSSProperties = {
        maxWidth: matchesMd ? 700 : 1000
    };
    const backgroundColor = "#FBB03B"; 

    return (
        <ProcessElementTemplate
            title={title}
            paragraph={paragraph}
            customImage={customImage}
            alt={alt}
            backgroundColor={backgroundColor}
            imageCustomCss={imageCustomCss}
        />
    )
};