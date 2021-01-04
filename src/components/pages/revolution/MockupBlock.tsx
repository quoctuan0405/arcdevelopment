import React from "react";
import { Typography } from "@material-ui/core";

import mockup from '../../../assets/mockupIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";
import { CSSProperties } from "@material-ui/styles";

export const MockupBlock: React.FC = () => {
    const title = "Mockup";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                This helps us understand and refine the solution itself before getting distracted by specifics and looks.
            </Typography>
        </>
    );
    const customImage = mockup;
    const alt = "basic website design outline";
    const imageCustomCss: CSSProperties = {
        maxWidth: 1000
    };
    const backgroundColor = "#FF7373"; 

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