import { CSSProperties as ReactCSSProperties } from "react";
import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { CSSProperties as MuiCSSProperties } from "@material-ui/styles";

interface Props {
    title: JSX.Element | string,
    paragraph: JSX.Element,
    customImage: string,
    alt: string,
    imageCustomCss?: MuiCSSProperties | ReactCSSProperties
    backgroundColor: string,
}

const useStyles = makeStyles(theme => ({
    blockContainer: {
        height: "90em",
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    title: {
        color: "black",
        marginTop: "5em",
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        }
    },
    paragraph: {
        color: "white",
        maxWidth: "20em",
        [theme.breakpoints.down('md')]: {
            textAlign: "center",
            maxWidth: "30em"
        }
    }
}));

export const ProcessElementTemplate: React.FC<Props> = ({title, paragraph, customImage, alt, backgroundColor, imageCustomCss}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction={matchesMd ? "column" : "row"} justify={matchesMd ? undefined : "center"} className={classes.blockContainer} style={{backgroundColor}}>
            <Grid item container direction="column" lg>
                <Grid item style={{alignSelf: matchesMd ? "center" : undefined}}>
                    <Typography variant="h4" gutterBottom className={classes.title}>{title}</Typography>
                </Grid>
                <Grid item className={classes.paragraph} style={{alignSelf: matchesMd ? "center" : undefined}}>
                    {paragraph}
                </Grid>
            </Grid>

            <Grid item lg style={{alignSelf: "center"}}>
                <img src={customImage} alt={alt} style={{...imageCustomCss, width: "100%"}}/>
            </Grid>
        </Grid>
    )
};