import { Position, ServicesElementTemplate } from "./ServicesElementTemplate"
import websiteIcon from '../../assets/websiteIcon.svg';
import { routes } from "../routes";

interface Props {
    position: Position
}

export const WebsiteDevelopment: React.FC<Props> = ({position}) => {
    const title = "Website Development";
    const subtitle1 = "Reach more. Discover more. Sell more.";
    const subtitle2 = <>
        Optimize for Search Engines, built for speed.
    </>

    return (
        <ServicesElementTemplate 
            alt="website icon" 
            customSvgGraphic={websiteIcon} 
            title={title} 
            subtitle1={subtitle1} 
            subtitle2={subtitle2} 
            position={position}
            learnMoreUrl={routes.WEBSITES.url}
        />
    )
}