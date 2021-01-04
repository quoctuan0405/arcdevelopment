import React from "react";
import { Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from 'react-router-dom';

import backArrow from './../../assets/backArrow.svg';
import forwardArrow from './../../assets/forwardArrow.svg';

interface Props {
    title: string;
    paragraph: JSX.Element;
    backArrowAlt: string;
    backArrowLink: string;
    forwardArrowAlt: string;
    forwardArrowLink: string;
}

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em",
    },
    arrowContainer: {
        marginTop: "0.5em",
    },
    itemContainer: {
        maxWidth: "40em"
    }
}));

export const IntroductionBlockTemplate: React.FC<Props> = ({title, paragraph, backArrowLink, backArrowAlt, forwardArrowLink, forwardArrowAlt}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="row" justify={matchesMd ? 'center' : undefined}>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                    <IconButton style={{backgroundColor: "transparent"}} component={Link} to={backArrowLink}>
                        <img src={backArrow} alt={backArrowAlt}/>
                    </IconButton>
                </Grid>
            </Hidden>
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography variant="h2" align={matchesMd ? "center" : undefined}>{title}</Typography>
                </Grid>
                <Grid item>
                    {paragraph}
                </Grid>
            </Grid>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer}>
                    <IconButton style={{backgroundColor: "transparent"}} component={Link} to={forwardArrowLink}>
                        <img src={forwardArrow} alt={forwardArrowAlt}/>
                    </IconButton>
                </Grid>
            </Hidden>
        </Grid>
    )
}