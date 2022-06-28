import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    backLight: Palette['primary'];
    backDark: Palette['primary'];
    lightStroke: Palette['primary'];
    typoLight: Palette['primary'];
    kqmLight: Palette['primary'];
    white: Palette['primary'];
  }
  interface PaletteOptions {
    backLight?: PaletteOptions['primary'];
    backDark?: PaletteOptions['primary'];
    lightStroke?: PaletteOptions['primary'];
    typoLight?: PaletteOptions['primary'];
    kqmLight?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    kqmLight: true;
    white: true;
  }
}
const defaultTheme = createTheme({
  palette: {
    mode: `dark`,
  }
});
console.log(defaultTheme)

export const theme = createTheme({
  palette: {
    mode: "dark",
    backLight: defaultTheme.palette.augmentColor({
      color: { main: '#423745' },
      name: "backLight"
    }),
    backDark: defaultTheme.palette.augmentColor({
      color: { main: '#2D282F' },
      name: "backDark"
    }),
    lightStroke: defaultTheme.palette.augmentColor({
      color: { main: '#584F65' },
      name: "lightStroke"
    }),
    typoLight: defaultTheme.palette.augmentColor({
      color: { main: '#BFB3CD' },
      name: "typoLight"
    }),
    kqmLight: defaultTheme.palette.augmentColor({
      color: { main: '#D19FF8' },
      name: "kqmLight"
    }),
    white: defaultTheme.palette.augmentColor({
      color: { main: '#FFFFFF' },
      name: "white"
    }),

  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.down('sm')]: {
            padding: defaultTheme.spacing(1),
            "&:last-child": {
              paddingBottom: defaultTheme.spacing(1),
            }
          },
          [defaultTheme.breakpoints.up('sm')]: {
            "&:last-child": {
              paddingBottom: defaultTheme.spacing(2),
            }
          }
        }
      }
    }
  }
})
console.log(theme)
