import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#4377d4',
            light: '#9294aa',
            dark: '#020a67',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f7f72b',
            dark: '#899200',
            light: 'rgba(255,255,131,0.8)',
            contrastText: '#171717',
        },
        background: {
            default: '#f4fffb',
            paper: '#f4fbec',
        },
        error: {
            main: '#d21717',
        },
        divider: 'rgba(0,10,111,0.8)',
    },
};

/*
export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#56da93',
      light: '#a2ecc5',
      dark: '#164832',
      contrastText: 'rgba(6,0,2,0.87)',
    },
    secondary: {
      main: '#9856af',
      light: '#edacf7',
      dark: '#59126b',
      contrastText: '#ffffff',
    },
    background: {
      default: '#181818',
      paper: '#010808',
    },
    divider: 'rgba(253,253,214,0.4)',
  },
};
*/ 