import React, { CSSProperties } from "react";
import { Typography } from "@material-ui/core";

import launch from '../../../assets/launchIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const LaunchBlock: React.FC = () => {
    const title = "Launch";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                The moment we’ve all been waiting for.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.
            </Typography>
        </>
    );
    const customImage = launch;
    const alt = "handshake";
    const imageCustomCss: CSSProperties = {
        maxWidth: 200  
    };
    const backgroundColor = "#C12720"; 

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