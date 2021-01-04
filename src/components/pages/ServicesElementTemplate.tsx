import React from "react"
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { ButtonArrow } from "../ui/ButtonArrow"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

export enum Position {
    LEFT,
    RIGHT
}

interface Props {
    alt: string
    customSvgGraphic: string,
    title: JSX.Element | string,
    subtitle1: JSX.Element | string,
    subtitle2: JSX.Element | string,
    position: Position,
    learnMoreUrl: string
}

const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.orange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    subtitle: {
        marginBottom: "1em",
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "6em",
        marginBottom: "6em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: "3em",
            marginBottom: "3em"
        }
    }
}));

export const ServicesElementTemplate: React.FC<Props> = ({alt, customSvgGraphic, title, subtitle1, subtitle2, position, learnMoreUrl}) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    const setJustify = () => {
        if (position === Position.LEFT) {
            return matchesSm ? "center" : undefined;
        } else {
            return matchesSm ? "center" : "flex-end";
        }
    };
    const justify = setJustify();

    return (
        <Grid container direction="row" justify={justify} className={classes.serviceContainer}>
            <Grid item style={{textAlign: matchesSm ? "center" : undefined, width: matchesSm ? undefined : "35em"}}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    {subtitle1}
                </Typography>
                <Typography variant="subtitle1">
                    {subtitle2}
                </Typography>

                <Button variant="outlined" className={classes.learnButton} component={Link} to={learnMoreUrl}>
                    <span style={{marginRight: 10}}>Learn more</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.blue}/>
                </Button>
            </Grid>
            <Grid item>
                <img className={classes.icon} alt={alt} src={customSvgGraphic} width="250em"/>
            </Grid>
        </Grid>
    )
}