import { useMediaQuery, useTheme } from "@material-ui/core";
import { Position, ServicesElementTemplate } from "./ServicesElementTemplate"
import mobileAppIcon from '../../assets/mobileIcon.svg';
import { routes } from "../routes";

interface Props {
    position: Position
}

export const MobileDevelopment: React.FC<Props> = ({position}) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    const title = "IOS/Android App Development";
    const subtitle1 = "Extend Functionality. Extend Access. Increase Engagement.";
    const subtitle2 = <>
        Integrate your web experience or create a standalone
        { matchesSm ? null : <br/>} with either mobile platform.
    </>

    return (
        <ServicesElementTemplate 
            alt="mobile development icon" 
            customSvgGraphic={mobileAppIcon} 
            title={title} 
            subtitle1={subtitle1} 
            subtitle2={subtitle2} 
            position={position}
            learnMoreUrl={routes.MOBILE_APPS.url}
        />
    )
}