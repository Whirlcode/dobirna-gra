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
          50: "#FAFEFF",
          100: "#F0F9FF",
          200: "#C5E1FC",
          300: "#9BBEF3",
          400: "#7292E4",
          500: "#364BB0",
          600: "#2148AB",
          700: "#134796",
          800: "#084C8C",
          900: "#004A75",
        },
        background: {
          body: "#bababc",
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
          50: "#C4C4C4",
          100: "#BABABA",
          200: "#ABABAB",
          300: "#999999",
          400: "#878787",
          500: "#787878",
          600: "#666666",
          700: "#455A64",
          800: "#383838",
          900: "#1C1C1C",
        },
        background: {
          body: "#181818",
          popup: "#010808",
          tooltip: "#010808"
        }
      }
    }
  }
})
export default theme


