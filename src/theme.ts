import { createTheme, DEFAULT_THEME, mergeMantineTheme, virtualColor } from "@mantine/core"

export const themeOverride = createTheme({
  /* Put your mantine theme override here */
    fontFamily: 'poppins, sans-serif',
    colors: {
        primary: virtualColor({
            name: 'primary',
            dark: 'blue',
            light: 'blue'
        })
    }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)