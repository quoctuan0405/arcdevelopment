import { FeatureElementTemplate, Position } from './FeatureElementTemplate';
import ecommerce from "../../../assets/ecommerce.svg";
import { Typography } from '@material-ui/core';

interface Props {
    position: Position
}

export const ECommerce: React.FC<Props> = ({position}) => {
    const title = "E-Commerce";
    const paragraph = (
        <>
            <Typography variant="body1" paragraph>
                It's no secret that people like to shop online.
            </Typography>
            <Typography variant="body1" paragraph>
                In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
            </Typography>
        </>
    );

    return (
        <FeatureElementTemplate 
            alt="e-commerce" 
            customSvgGraphic={ecommerce} 
            title={title}
            paragraph={paragraph}
            position={position}
        />
    )
}