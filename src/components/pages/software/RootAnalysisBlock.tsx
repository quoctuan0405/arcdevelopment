import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import roots from '../../../assets/root.svg';

const useStyles = makeStyles(theme => ({
    itemContainer: {
        maxWidth: "40em",
    }
}));

export const RootAnalysisBlock: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="row" style={{marginTop: "15em", marginBottom: "15em"}}>
            <Grid item container direction="column" alignItems="center">
                <Grid item>
                    <img src={roots} alt="tree with roots extending out" height={matchesSm ? "300em" : "450em"} width={matchesSm ? "300em" : "450em"}/>
                </Grid>
                <Grid item className={classes.itemContainer} direction="column">
                    <Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Many problems are merely symptoms of larger, underlying issues.
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}