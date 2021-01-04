import { useScrollTrigger } from "@material-ui/core";
import React from "react";

interface Props {
    children: React.ReactElement;
}

export const ElevationScroll: React.FC<Props> = ({children}) => {
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 0,
    });
  
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}