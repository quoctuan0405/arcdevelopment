import { Grid, Typography, Button, useTheme, makeStyles, useMediaQuery } from "@material-ui/core"
import { ButtonArrow } from './ButtonArrow';
import { Link } from 'react-router-dom';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import { routes } from "../routes";

const useStyles = makeStyles(theme => ({
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9em",
        width: 145,
        height: 45,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0
        }
    }
}));

export const CallToAction: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container className={classes.background} alignItems="center" justify={matchesSm ? "center" : "space-between"} direction={matchesSm ? 'column' : 'row'}>
            <Grid item style={{marginLeft: matchesSm ? 0 : "5em", textAlign: matchesSm ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">Simple Software. <br/> Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>Take advantage of the 21st Century.</Typography>

                        <Grid container item justify={matchesSm ? "center" : undefined}>
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to={routes.REVOLUTION.url}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.blue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Button variant="contained" className={classes.estimateButton} component={Link} to={routes.ESTIMATE.url}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    )
}