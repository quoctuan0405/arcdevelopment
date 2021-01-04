import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"

import vision from '../../../assets/vision.svg';

export const VisionBlock: React.FC = () => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction={matchesMd ? "column" : "row"} alignItems="center">
            <Grid item lg>
                <img src={vision} alt="mountain through binoculars" style={{maxWidth: matchesSm ? 300 : "40em", marginRight: matchesMd ? 0 : "5em", marginBottom: matchesMd ? "5em" : 0}}/>
            </Grid>
            
            <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                <Grid item>
                    <Typography variant="h4" align={matchesMd ? "center" : "right"} gutterBottom>Vison</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesMd ? "center" : "right"} paragraph>
                        The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increases our comfort, broadened our connections, and reshaped how we view the world.
                    </Typography>
                    <Typography variant="body1" align={matchesMd ? "center" : "right"} paragraph>
                        What once was confined to huge rooms and teams of engineers now resides in every single on of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                    </Typography>
                    <Typography variant="body1" align={matchesMd ? "center" : "right"} paragraph>
                        We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into the next chapter of technological expansion, exploration, and innovation.
                    </Typography>
                    <Typography variant="body1" align={matchesMd ? "center" : "right"} paragraph>
                        By holding ourselves to rigorous standards and pristine quality we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                    </Typography>
                    <Typography variant="body1" align={matchesMd ? "center" : "right"} paragraph>

                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}