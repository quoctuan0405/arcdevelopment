import React from "react";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import { Automation } from "./Automation";
import { UxDesign } from "./UxDesign";

const useStyles = makeStyles(theme => ({
    itemContainer: {
        maxWidth: "40em",
        [theme.breakpoints.down('md')]: {
            marginTop: "8em",
            marginBottom: "8em"
        }
    }
}));

export const SecondAnimationBlock: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction={matchesMd ? "column" : "row"} justify="space-between" alignItems={matchesMd ? "center" : undefined}>
            <Grid item md className={classes.itemContainer}>
                <Automation/>
            </Grid>
            <Grid item md className={classes.itemContainer}>
                <UxDesign/>
            </Grid>
        </Grid>
    )
}