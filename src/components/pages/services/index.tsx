import { useTheme, Grid, useMediaQuery, Typography } from "@material-ui/core"
import { CustomSoftware } from "../CustomSoftware"
import { MobileDevelopment } from "../MobileDevelopment"
import { Position } from "../ServicesElementTemplate"
import { WebsiteDevelopment } from "../WebsiteDevelopment"

export const Services: React.FC = () => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="column">
            <Grid item style={{marginLeft: matchesSm ? 0 : "5em", marginTop: matchesSm ? "1em" : "2em"}}>
                <Typography variant="h2" align={matchesSm ? "center" : undefined} gutterBottom>Services</Typography>
            </Grid>
            <Grid item style={{marginRight: matchesSm ? 0 : "5em", marginTop: matchesSm ? "-3em" : 0}}>
                <MobileDevelopment position={Position.RIGHT}/>
            </Grid>
            <Grid item style={{marginLeft: matchesSm ? 0 : "5em"}}>
                <CustomSoftware position={Position.LEFT}/>
            </Grid>
            <Grid item style={{marginRight: matchesSm ? 0 : "5em"}}>
                <WebsiteDevelopment position={Position.RIGHT}/>
            </Grid>
        </Grid>
    )
}