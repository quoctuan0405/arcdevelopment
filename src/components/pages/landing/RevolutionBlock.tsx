import { Card, CardContent, Grid, Typography, Button, makeStyles, useTheme } from "@material-ui/core"
import { ButtonArrow } from '../../ui/ButtonArrow';
import revolutionBackground from '../../../assets/repeatingBackground.svg';
import { Link } from 'react-router-dom';
import { routes } from "../../routes";

const useStyles = makeStyles(theme => ({
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9em",
        width: 145,
        height: 45
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    }
}));

export const RevolutionBlock: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container alignItems="center" justify="center" style={{height: "100em", marginTop: "12em"}}>
            <Card className={classes.revolutionCard}>
                <CardContent>
                    <Grid container direction="column" style={{ textAlign: "center" }}>
                        <Grid item>
                            <Typography variant="h3" gutterBottom>The Revolution</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">Visionary inside coupled with cutting-edge technology is a recipe for revolution.</Typography>
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to={routes.REVOLUTION.url}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.blue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <div className={classes.revolutionBackground}/>
        </Grid>
    )
}