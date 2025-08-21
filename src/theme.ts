import { createTheme, DEFAULT_THEME, mergeMantineTheme, virtualColor } from "@mantine/core"

export const themeOverride = createTheme({
  /* Put your mantine theme override here */
    fontFamily: 'poppins, sans-serif',
    // Red can be associated with errors
    primaryColor: 'orange',
    colors: {
        primary: virtualColor({
            name: 'primary',
            dark: 'orange',
            light: 'orange'
        })
    },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)