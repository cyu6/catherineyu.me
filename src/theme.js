import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#016C84',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
  },
});

