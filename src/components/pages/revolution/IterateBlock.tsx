import React from "react";
import { Typography } from "@material-ui/core";

import iterate from '../../../assets/iterateIcon.svg';
import { ProcessElementTemplate } from "./ProcessElementTemplate";

export const IterateBlock: React.FC = () => {
    const title = "Consultation";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.
            </Typography>
            <Typography variant="body1" paragraph style={{color: "white"}}>
                Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.
            </Typography>
        </>
    );
    const customImage = iterate;
    const alt = "handshake";
    const backgroundColor = "#29ABE2"; 

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