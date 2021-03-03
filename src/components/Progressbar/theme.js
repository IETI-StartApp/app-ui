import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    overrides: {
     MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#950743',
        },
        '&$active': {
          color: '#950740',
        },
      },
      active: {},
      completed: {},
    }
    }});


export default theme;