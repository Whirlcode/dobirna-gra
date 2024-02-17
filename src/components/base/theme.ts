import { extendTheme } from '@mui/joy/styles';


declare module '@mui/joy/styles' {
  interface PalettePrimary {
    main: string,
    light: string,
    dark: string,
    contrastText: string
  }
  interface PaletteNeutural {
    main: string,
    light: string,
    dark: string,
    contrastText: string
  }
  interface PaletteDanger {
    main: string,
  }
  interface PaletteBackground {
    body: string,
    popup: string
  }
}


const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#f9f9e4",
          100: "#f0efbc",
          200: "#e6e691",
          300: "#dbdb66",
          400: "#d2d444",
          500: "#cbcd1d",
          600: "#bdbc18",
          700: "#aca610",
          800: "#9a900a",
          900: "#7d6b00",
        },
        neutral: {
          50: "#ebeefa",
          100: "#cbd3f3",
          200: "#a9b6eb",
          300: "#8599e2",
          400: "#6981db",
          500: "#4e69d4",
          600: "#4760c9",
          700: "#3d55bc",
          800: "#364bb0",
          900: "#29389a",
        },
        background: {
          body: "#181818",
          popup: "#f4fbec"
        },
        danger: {
          main: "#d21717"
        }
      }
    },
    dark: {
      palette: {
        primary: {
          50: "#e7f6eb",
          100: "#c6e8ce",
          200: "#a2d9ae",
          300: "#7bcc8e",
          400: "#5dc076",
          500: "#3eb55e",
          600: "#35a654",
          700: "#2b9348",
          800: "#22823e",
          900: "#0f632a",
        },
        neutral: {
          50: "#ECEFF1",
          100: "#CFD8DC",
          200: "#B0BEC5",
          300: "#90A4AE",
          400: "#78909C",
          500: "#607D8B",
          600: "#546E7A",
          700: "#455A64",
          800: "#37474F",
          900: "#263238",
        },
        background: {
          body: "#f4fffb",
          popup: "#010808",
          tooltip: "#010808"
        }
      }
    }
  }
})
export default theme


