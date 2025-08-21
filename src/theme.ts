import { createTheme, virtualColor } from "@mantine/core"

export const theme = createTheme({
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
