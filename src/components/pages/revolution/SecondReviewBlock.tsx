import React from "react";
import { Typography } from "@material-ui/core";

import review from '../../../assets/reviewIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const SecondReviewBlock: React.FC = () => {
    const title = "Review";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.
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