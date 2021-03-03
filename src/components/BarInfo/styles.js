import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
    paper: {
      margin: 'auto',
      //display:'Grid',
      '@media (min-width:50px)': { 
        width: '67%'
      },
      '@media (min-width:480px)': { 
        width: '68%'
      },
      '@media (min-width:600px)': { 
        width: '69%'
      },
      '@media (min-width:801px)': { 
        width: '70%'
      },
      '@media (min-width:1025px)': { 
        width: '72%'
      },
      padding: theme.spacing(2),
     
    },
    purpura: {
    fontFamily: 'Roboto',
    fontStyle: 'Roboto',
    fontWeight: 'Roboto',
    color: '#950740',
    },
    normal:{
      fontFamily: 'Roboto',
      fontStyle: 'Roboto',
      fontWeight: 'Roboto',
      color: '#212121',
    },
    descripcion:{
      fontFamily: 'Roboto',
      fontStyle: 'Roboto',
      fontWeight: 'Roboto',
      fontSize: 18,
      textAlign: 'justify',
      letterSpacing: '0.1px',
      color: '#424242',
      //#616161 #9e9e9e
    }
  }));