import React from 'react';
import { AppBar, Button, makeStyles, Toolbar, useMediaQuery } from "@material-ui/core";
import { ElevationScroll } from '../ElevationScroll';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

import logo from '../../../assets/logo.svg';
import { routes } from '../../routes';
import { HeaderLinks } from './HeaderLinks';
import { MobileDrawer } from './MobileDrawer';
import { CustomToolbarMargin } from './CustomToolbarMargin';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down('xs')]: {
            height: "5.5em"
        }
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
}));

export const mappedRoutes =  {
    HOME: {...routes.HOME, navbarValue: 0},
    SERVICES: {...routes.SERVICES, navbarValue: 1},
    CUSTOM_SOFTWARE: {...routes.CUSTOM_SOFTWARE, navbarValue: 1},
    MOBILE_APPS: {...routes.MOBILE_APPS, navbarValue: 1},
    WEBSITES: {...routes.WEBSITES, navbarValue: 1},
    REVOLUTION: {...routes.REVOLUTION, navbarValue: 2},
    ABOUT: {...routes.ABOUT, navbarValue: 3},
    CONTACT: {...routes.CONTACT, navbarValue: 4},
    ESTIMATE: {...routes.ESTIMATE, navbarValue: 5},
}; 

export const Header: React.FC = () => {
    const classes = useStyles();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <ElevationScroll>
                <AppBar className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer} 
                            component={Link} 
                            to={mappedRoutes.HOME.url}
                            disableRipple
                        >
                            <img className={classes.logo} alt="Company logo" src={logo}/>
                        </Button>

                        {matches ? <MobileDrawer/> : <HeaderLinks/>}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <CustomToolbarMargin/>
        </>
    )
}