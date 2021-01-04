import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1.25em"
        },
    },
}));

export const CustomToolbarMargin: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.toolbarMargin}/>
    )
}