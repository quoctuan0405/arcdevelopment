import React from "react";
import { Typography } from "@material-ui/core";

import consultation from '../../../assets/consultationIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const ProcessBlock: React.FC = () => {
    const title = "Consultation";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.  
            </Typography>
        </>
    );
    const customImage = consultation;
    const alt = "handshake";
    const backgroundColor = "#B3B3B3";

    return (
        <ProcessElementTemplate
            title={title}
            paragraph={paragraph}
            customImage={customImage}
            alt={alt}
            backgroundColor={backgroundColor}
        />
    )
};