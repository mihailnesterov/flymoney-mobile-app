import React from 'react';
import { ThemeProvider } from 'styled-components/native';

const theme = {
    colors: {
        white: "#ffffff",
        light: "#e0e0e0",
        dark: "#666666",
        black: "#000000",
        transparent: "transparent",
    },
    sizes: {
        none: 0,
        xsmall: "0.5rem",
        small: "1rem",
        medium: "1.2rem",
        large: "1.5rem",
        xlarge: "2rem"
    },
    fontWeight: {
        normal: "normal",
        lighter: "lighter",
        bolder: "bolder",
        bold: "bold"
    },
    shadow: {
        xsmall: "1px 1px 1px rgba(0,0,0,0.1)",
        small: "2px 2px 2px rgba(0,0,0,0.1)",
        medium: "4px 4px 4px rgba(0,0,0,0.2)",
        around: "1px 1px 4px rgba(0,0,0,0.15)"
    },
    display: {
        flex: 'flex',
        block: 'block',
        none: 'none'
    },
    flex: {
        one:1,
        two:2,
        three:3,
        four:4,
        five:5
    },
    alignItems: {
        center: 'center',
        start: 'flex-start',
        end: 'flex-end'
    },
    justifyContent: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around'
    },
    flexWrap: {
        wrap: 'wrap',
        noWrap: 'no-wrap',
    },
    textAlign: {
        center: 'center',
        left: 'left',
        right: 'right',
        justify: 'justify'
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;