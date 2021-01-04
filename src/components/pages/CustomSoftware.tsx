import { Position, ServicesElementTemplate } from "./ServicesElementTemplate"
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { routes } from "../routes";

interface Props {
    position: Position
}

const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.orange
    }
}));

export const CustomSoftware: React.FC<Props> = ({position}) => {
    const classes = useStyles();

    const title = "Custom Software Development";
    const subtitle1 = "Save Energey. Save Time. Save Money.";
    const subtitle2 = <>
        Complete digital solutions, from investigation to {" "}
        <span className={classes.specialText}>celebration.</span>
    </>;

    return (
        <ServicesElementTemplate 
            alt="custom software icon" 
            customSvgGraphic={customSoftwareIcon} 
            title={title} 
            subtitle1={subtitle1} 
            subtitle2={subtitle2} 
            position={position}
            learnMoreUrl={routes.CUSTOM_SOFTWARE.url}
        />
    )
}