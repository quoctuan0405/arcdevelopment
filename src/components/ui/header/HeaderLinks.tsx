import React, { useState } from "react";
import { Button, makeStyles, Menu, MenuItem, Tab, Tabs, useTheme } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { mappedRoutes } from './index';
import { useSetInitialActiveTab } from "../../../hooks/useSetActiveTab";
import { routes } from "../../routes";

interface TabConfig {
    onMouseOver?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    ariaOwns?: string | undefined;
    navbarValue: number;
    url: string;
    name: string;
}

const useStyles = makeStyles((theme) => ({
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        fontFamily: "Raleway",
        minWidth: 10,
        marginLeft: 25
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: 50,
        marginLeft: 50,
        marginRight: 25,
        height: 45,
        "&:hover": {
            background: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.blue,
        borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        color: "white",
        "&:hover": {
            opacity: 1
        },
    }   
}));
 
export const HeaderLinks: React.FC = () => {
    const classes = useStyles();

    const theme = useTheme();

    const [activeTab, setActiveTab] = useState<number>(mappedRoutes.HOME.navbarValue);
    const [anchorElement, setAnchorElement] = useState<EventTarget & HTMLAnchorElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    useSetInitialActiveTab({activeTab, setActiveTab});

    const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        setActiveTab(value);
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setAnchorElement(event.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setAnchorElement(null);
        setOpen(false);
    }

    const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        setActiveTab(mappedRoutes.SERVICES.navbarValue);
        setAnchorElement(null);
        setOpen(false);
    }

    const headerTabs: TabConfig[] = [
        mappedRoutes.HOME,
        {...mappedRoutes.SERVICES, onMouseOver: handleClick, ariaOwns: anchorElement ? "simple-menu" : undefined},
        mappedRoutes.REVOLUTION,
        mappedRoutes.ABOUT,
        mappedRoutes.CONTACT
    ];
    const menuOptions = [mappedRoutes.SERVICES, mappedRoutes.CUSTOM_SOFTWARE, mappedRoutes.MOBILE_APPS, mappedRoutes.WEBSITES];

    return (
        <>
            <Tabs 
                onChange={handleChange}
                value={activeTab} 
                className={classes.tabContainer}
                indicatorColor="primary"
            >
                {headerTabs.map((tab) => 
                    <Tab
                        label={tab.name}
                        className={classes.tab}
                        component={Link}
                        to={tab.url}
                        onMouseOver={tab.onMouseOver}
                        aria-owns={tab.ariaOwns}
                        key={tab.name}
                    />
                )}
            </Tabs>

            <Button className={classes.button} variant="contained" color="secondary" component={Link} to={routes.ESTIMATE.url}>
                Free Estimate
            </Button>

            {/* Submenu in the services tab */}
            <Menu style={{zIndex: theme.zIndex.modal + 2}} elevation={0} id="simple-menu" classes={{paper: classes.menu}} MenuListProps={{onMouseLeave: handleClose}} anchorEl={anchorElement} open={open} onClose={handleClose} keepMounted>
                {menuOptions.map(({url, name}, index) => 
                    <MenuItem
                        key={url} 
                        classes={{root: classes.menuItem}} 
                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            handleMenuItemClick(event, index); 
                        }} 
                        selected={window.location.pathname === url}
                        component={Link} 
                        to={url}
                    >
                        {name}
                    </MenuItem>
                )}
            </Menu>
        </>
    )
}