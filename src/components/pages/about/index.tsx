import { Grid, makeStyles, Typography } from "@material-ui/core";
import { HistoryBlock } from "./HistoryBlock";
import { TeamBlock } from "./TeamBlock";

const useStyles = makeStyles(theme => ({
    blockContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4,
    }
}));

export const AboutUsPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item className={classes.blockContainer} style={{marginTop: "2em"}}>
                <Typography variant="h2">About Us</Typography>
            </Grid>

            <Grid item container justify="center" className={classes.blockContainer}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>

            <Grid item className={classes.blockContainer}>
                <HistoryBlock/>
            </Grid>
            
            <Grid item className={classes.blockContainer}>
                <TeamBlock/>
            </Grid>
        </Grid>
    )
}