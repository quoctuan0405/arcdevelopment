import React, { CSSProperties as ReactCSSProperties } from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CSSProperties as MuiCSSProperties } from "@material-ui/styles";

export enum Position {
    LEFT,
    RIGHT
}

interface Props {
    alt: string
    customSvgGraphic: string,
    title: JSX.Element | string,
    paragraph: JSX.Element | string,
    position: Position,
    customImageCss?: ReactCSSProperties | MuiCSSProperties
    customTitleCss?: ReactCSSProperties | MuiCSSProperties
}

const useStyles = makeStyles(theme => ({
    paragraph: {
        maxWidth: "30em",
        marginLeft: "1em",
        marginRight: "2em",
        [theme.breakpoints.down('sm')]: {
            marginTop: "1em",
            marginLeft: 0,
            marginRight: 0,
            textAlign: "center"
        }
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            maxWidth: "14em"
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
    },
}));

export const FeatureElementTemplate: React.FC<Props> = ({alt, customSvgGraphic, title, paragraph, position, customImageCss, customTitleCss}) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    if (position === Position.LEFT) {
        return (
            <Grid container direction="column" className={classes.serviceContainer}>
                <Grid item>
                    <Typography variant="h2" align={matchesSm ? "center" : "left"} style={customTitleCss ? customTitleCss : undefined}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item container direction={matchesSm ? "column" : "row"} alignItems="center">
                    <img className={classes.icon} alt={alt} src={customSvgGraphic} style={customImageCss ? customImageCss : {margin: 0}}/>
                    <div className={classes.paragraph}>
                        {paragraph}
                    </div>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container direction="column" className={classes.serviceContainer}>
                <Grid item>
                    <Typography variant="h2" align={matchesSm ? "center" : "right"} style={!matchesSm && customTitleCss ? customTitleCss : undefined}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item container direction={matchesSm ? "column" : "row"} alignItems="center" justify="flex-end">
                    <div className={classes.paragraph}>
                        {paragraph}
                    </div>
                    <img className={classes.icon} alt={alt} src={customSvgGraphic} style={customImageCss ? customImageCss : {margin: 0}}/>
                </Grid>
            </Grid>
        );
    }
}