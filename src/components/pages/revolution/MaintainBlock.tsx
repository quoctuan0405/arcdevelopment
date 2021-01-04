import React, { CSSProperties } from "react";
import { Typography } from "@material-ui/core";

import maintain from '../../../assets/maintainIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const MaintainBlock: React.FC = () => {
    const title = "Maintain";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Our work doesn’t end there.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.
            </Typography>
        </>
    );
    const customImage = maintain;
    const alt = "handshake";
    const imageCustomCss: CSSProperties = {
        maxWidth: 500  
    };
    const backgroundColor = "#8B45CE"; 

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