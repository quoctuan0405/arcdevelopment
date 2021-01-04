import React from 'react';
import { FeatureElementTemplate, Position } from './FeatureElementTemplate';
import outreach from "../../../assets/outreach.svg";
import { Typography } from '@material-ui/core';

interface Props {
    position: Position
}

export const OutReach: React.FC<Props> = ({position}) => {
    const title = "Out Reach";
    const paragraph = (
        <Typography variant="body1" paragraph>
            Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what's right for them before visiting in person.
        </Typography>
    );

    return (
        <FeatureElementTemplate 
            alt="out reach" 
            customSvgGraphic={outreach} 
            title={title}
            paragraph={paragraph}
            position={position}
        />
    )
}