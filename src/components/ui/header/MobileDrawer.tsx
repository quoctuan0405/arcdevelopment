import { IconButton, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import { mappedRoutes } from ".";
import { useSetInitialActiveTab } from "../../../hooks/useSetActiveTab";
import { CustomToolbarMargin } from "./CustomToolbarMargin";

const useStyles = makeStyles((theme) => ({
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: 50,
        width: 50
    },
    drawer: {
        backgroundColor: theme.palette.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.orange
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        }
    }
}));

export const MobileDrawer: React.FC = () => {
    const classes = useStyles();

    let iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (iOS === "") {
        iOS = false;
    }

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);

    useSetInitialActiveTab({activeTab, setActiveTab});

    const drawerItemOptions = [mappedRoutes.HOME, mappedRoutes.SERVICES, mappedRoutes.REVOLUTION, mappedRoutes.ABOUT, mappedRoutes.CONTACT];

    return ( 
        <>
            <SwipeableDrawer  
                classes={{paper: classes.drawer}}
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
            >
                <CustomToolbarMargin/>
                <List disablePadding>
                    {drawerItemOptions.map(({url, name, navbarValue}) => 
                        <ListItem
                            key={url}
                            onClick={() => {setOpenDrawer(false); setActiveTab(navbarValue)}} 
                            selected={url === window.location.pathname}
                            classes={{selected: classes.drawerItemSelected}}
                            divider 
                            button 
                            component={Link} 
                            to={url}
                        >
                            <ListItemText 
                                className={classes.drawerItem} 
                                disableTypography
                            >
                                {name}
                            </ListItemText>
                        </ListItem>
                    )}
                    
                    <ListItem classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}} onClick={() => setOpenDrawer(false)} divider button component={Link} to={mappedRoutes.ESTIMATE.url}>
                        <ListItemText className={classes.drawerItem} disableTypography>{mappedRoutes.ESTIMATE.name}</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>

            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    );
}