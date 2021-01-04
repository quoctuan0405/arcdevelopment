import React, { CSSProperties } from 'react';
import { FeatureElementTemplate, Position } from './FeatureElementTemplate';
import analytics from "../../../assets/analytics.svg";
import { Typography } from '@material-ui/core';

interface Props {
    position: Position
}

export const Analytics: React.FC<Props> = ({position}) => {
    const title = "Analytics";
    const paragraph = (
        <Typography variant="body1" paragraph>
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
        </Typography>
    );
    const customImageCss: CSSProperties = {
        marginLeft: "-2.75em",
    }

    return (
        <FeatureElementTemplate 
            alt="analytics" 
            customSvgGraphic={analytics} 
            title={title}
            paragraph={paragraph}
            position={position}
            customImageCss={customImageCss}
        />
    )
}