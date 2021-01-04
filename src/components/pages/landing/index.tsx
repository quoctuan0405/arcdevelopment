import { makeStyles, Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { HeroBlock } from './HeroBlock';
import { CustomSoftware } from '../CustomSoftware';
import { MobileDevelopment } from '../MobileDevelopment';
import { WebsiteDevelopment } from '../WebsiteDevelopment';
import { RevolutionBlock } from './RevolutionBlock';
import { InformationBlock } from './InformationBlock';
import { CallToAction } from '../../ui/CallToAction';
import { Position } from '../ServicesElementTemplate';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    }
}));

export const LandingPage: React.FC = () => {
    const classes = useStyles();

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item>
                <HeroBlock/>
            </Grid>
            <Grid item style={{marginLeft: matchesSm ? 0 : "5em", marginTop: "7em"}}>
                <CustomSoftware position={Position.LEFT}/>
            </Grid>
            <Grid item style={{marginRight: matchesSm ? 0 : "5em"}}>
                <MobileDevelopment position={Position.RIGHT}/>
            </Grid>
            <Grid item style={{marginLeft: matchesSm ? 0 : "5em", marginBottom: "-8em"}}>
                <WebsiteDevelopment position={Position.LEFT}/>
            </Grid>
            <Grid item>
                <RevolutionBlock/>
            </Grid>
            <Grid item>
                <InformationBlock/>
            </Grid>
            <Grid item>
                <CallToAction/>
            </Grid>
        </Grid>
    )
}