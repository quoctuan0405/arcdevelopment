import { makeStyles, Grid, Button, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Lottie, { Options } from 'react-lottie';
import { Link } from 'react-router-dom';

import animationData from '../../../animations/landinganimation/data';
import { ButtonArrow } from '../../ui/ButtonArrow';
import { routes } from "../../routes";

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            background: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9em",
        width: 145,
        height: 45
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    }
}));

export const HeroBlock: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid sm item className={classes.heroTextContainer}>
                <Typography variant="h2" align="center">
                    Bringing West Coast Technology <br/> to the Midwest
                </Typography>
                <Grid container justify="center" className={classes.buttonContainer}>
                    <Grid item>
                        <Button variant="contained" className={classes.estimateButton} component={Link} to={routes.ESTIMATE.url}>Free estimate</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" className={classes.learnButtonHero} component={Link} to={routes.REVOLUTION.url}>
                            <span style={{marginRight: 10}}>Learn more</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.blue}/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid sm item className={classes.animation}>
                <Lottie options={defaultOptions} height={"100%"}/>
            </Grid>
        </Grid>
    )
}