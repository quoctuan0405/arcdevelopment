import { CSSProperties } from 'react';
import { FeatureElementTemplate, Position } from './FeatureElementTemplate';
import seo from "../../../assets/seo.svg";
import { Typography } from '@material-ui/core';

interface Props {
    position: Position
}

export const Seo: React.FC<Props> = ({position}) => {
    const title = <>Search Engine Optimization</>;
    const paragraph = (
        <>
            <Typography variant="body1" paragraph>
                How often have you ever been to the second page of Google results?
            </Typography>
            <Typography variant="body1" paragraph>
                If you're like us, probably never.
            </Typography>
            <Typography variant="body1" paragraph>
                Customers don't go there either, so we make sure your website is designed to end up on top.
            </Typography>
        </>
    );
    const customeTitleCss: CSSProperties = {
        marginBottom: "1em",
    }

    return (
        <FeatureElementTemplate 
            alt="search engine optimization" 
            customSvgGraphic={seo} 
            title={title}
            paragraph={paragraph}
            position={position}
            customTitleCss={customeTitleCss}
        />
    )
}