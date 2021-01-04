import React, { CSSProperties } from "react";
import { Typography } from "@material-ui/core";

import design from '../../../assets/designIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const DesignBlock: React.FC = () => {
    const title = "Design";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                No aspect is superfluous, and care will be taken with every decision.
            </Typography>
        </>
    );
    const customImage = design;
    const alt = "handshake";
    const imageCustomCss: CSSProperties = {
        maxWidth: 1000
    };
    const backgroundColor = "#A67C52"; 

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