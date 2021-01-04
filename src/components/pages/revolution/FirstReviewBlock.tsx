import React from "react";
import { Typography } from "@material-ui/core";

import review from '../../../assets/reviewIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const FirstReviewBlock: React.FC = () => {
    const title = "Review";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
            </Typography>
        </>
    );
    const customImage = review;
    const alt = "handshake";
    const backgroundColor = "#39B54A"; 

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