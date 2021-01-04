import React from 'react';
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import profile from '../../../assets/founder.jpg';
import yearbook from '../../../assets/yearbook.svg';
import puppy from '../../../assets/puppy.svg';

const useStyles = makeStyles(theme => ({
    avatar: {
        height: "25em",
        width: "25em"
    }
}));

export const TeamBlock: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h4" gutterBottom align="center">Team</Typography>
            </Grid>

            <Grid item>
                <Typography variant="body1" paragraph align="center">
                    Zachary Reece, Founder
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    I started coding when I was 9 years old.
                </Typography>
            </Grid>

            <Grid item>
                <Avatar alt="founder" src={profile} className={classes.avatar}/>
            </Grid>

            <Grid item container direction="row">
                <Grid item container direction="column" alignContent="center" lg>
                    <Grid item>
                        <img src={yearbook} alt="yearbook page about founder"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">a page from my Sophomore yearbook</Typography>
                    </Grid>
                </Grid>
                <Grid item lg justify="center" style={{maxWidth: "45em", padding: "1.25em"}}>
                    <Typography variant="body1" align="center" paragraph>
                        I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                    </Typography>
                </Grid>
                <Grid item container direction="column" alignContent="center" alignItems="flex-end" lg>
                    <Grid item>
                        <img src={puppy} alt="grey spotted puppy"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">my miniature dapple dachshund, Sterling</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}