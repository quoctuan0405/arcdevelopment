import { Grid, Hidden, makeStyles } from "@material-ui/core"
import footerAdornment from '../../../assets/Footer Adornment.svg';
import { Link } from 'react-router-dom';
import { routes } from "../../routes";
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.blue,
        width: "100%",
        zIndex: theme.zIndex.modal + 1,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        },
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75em",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        width: "4em",
        height: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    }
}))

export const Footer: React.FC = () => {
    const classes = useStyles();    

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to={routes.HOME.url}>Home</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to={routes.SERVICES.url}>Services</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.CUSTOM_SOFTWARE.url}>Custom Software Development</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.MOBILE_APPS.url}>IOS/Android App Development</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.WEBSITES.url}>Website Development</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to={routes.REVOLUTION.url}>The revolution</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.REVOLUTION.url}>Vision</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.REVOLUTION.url}>Technology</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.REVOLUTION.url}>Process</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to={routes.ABOUT.url}>About us</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.ABOUT.url}>History</Grid>
                            <Grid item className={classes.link} component={Link} to={routes.ABOUT.url}>Team</Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to={routes.CONTACT.url}>Contact us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>


            <img className={classes.adornment} alt="black decorative slash" src={footerAdornment}/>

            <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
                <Grid item component={"a"} href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src={instagram} className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    )
}