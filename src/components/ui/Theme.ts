import { createMuiTheme } from "@material-ui/core";
import { CSSProperties } from "react";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

declare module '@material-ui/core' {
    interface Theme {
        common: {}
    }
  }
  

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {    
        common: {}
    }
}

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        blue: string
        orange: string
    }

    interface PaletteOptions {
        blue: string
        orange: string
    }
}

declare module "@material-ui/core/styles/createTypography" {
    interface TypographyOptions {
        tab: CSSProperties,
        estimate: CSSProperties,
        learnButton: CSSProperties,
    }

    interface Typography {
        tab: CSSProperties,
        estimate: CSSProperties,
        learnButton: CSSProperties,
    }
}

export const theme = createMuiTheme({
    common: {},
    palette: {
        blue: `${arcBlue}`,
        orange: `${arcOrange}`,
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "capitalize",
            color: "white"
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5em",
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300
        },
        caption: {
            fontSize: '1rem',
            fontWeight: 300,
            color: arcGrey
        }
    },

});