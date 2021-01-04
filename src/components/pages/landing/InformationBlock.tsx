import { Grid, makeStyles, Typography, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { ButtonArrow } from '../../ui/ButtonArrow';
import infoBackground from '../../../assets/infoBackground.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const useStyles = makeStyles(theme => ({
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9em",
        width: 145,
        height: 45,
        color: "white",
        borderColor: "white"
    },
    content: {
        position: "absolute",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        }
    },
    aboutUs: {
        marginLeft: "5em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    contactUs: {
        marginRight: "5em", 
        textAlign:"right",
        [theme.breakpoints.down("sm")]: {
            marginRight: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "inherit",
            marginRight: 0
        }
    }
}));

export const InformationBlock: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="row" style={{height: "80em"}} alignItems="center">
            <Grid container className={classes.content} direction={matchesXs ? "column" : "row"}>
                <Grid sm item className={classes.aboutUs}>
                    <Grid container style={{marginBottom: matchesXs ? "10em" : 0}} direction="column">
                        <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                        <Typography variant="subtitle2">Let's get personal.</Typography>
                        <Grid item>
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to={routes.ABOUT.url}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={15} height={15} fill={"white"}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sm item className={classes.contactUs}>
                    <Grid container direction="column">
                        <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                        <Typography variant="subtitle2">Say hello!</Typography>
                        <Grid item>
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to={routes.CONTACT.url}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={15} height={15} fill={"white"}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.infoBackground}/>
        </Grid>
    )
}