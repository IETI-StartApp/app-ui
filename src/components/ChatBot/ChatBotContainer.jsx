import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Grid } from '@material-ui/core';
import { ButtonDesign} from "./styleChatBot";
export const ChatBotContainer = () => {
  const theme = {
    
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#950740',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#950740',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const steps = [
    {
      id: '1',
      message: 'Bienvenido a StartApp, que quieres hacer hoy?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Ver Proyectos', trigger: '3' },
        { value: 2, label: 'Ver mis proyectos', trigger: '4' },
        { value: 4, label: 'Agregar Proyecto', trigger: '5' },
       
      ],
    },
    {
      id: '4',
      component: (
        <Link to="/#features">
          <ButtonDesign className="button" >
            Ver mis proyectos!
          </ButtonDesign>
        </Link>
      ),
      end: true,
    },
    {
      id: '3',
      component: (
        <Link to="projects">
          <ButtonDesign className="button">
            Ver proyectos!
          </ButtonDesign>
        </Link>
      ),
      end: true,
    },
    {
      id: '5',
      component: (
        <Link to="register-project">
          <ButtonDesign className="button" >
            Agregar Proyecto!
          </ButtonDesign>
        </Link>
      ),
      end: true,
    },
  ]
  return (
    <div>
      <Grid container
                direction="row"
                justify="flex-end"
                alignItems="stretch"
                style={{ overflowY: "auto" }}>
                  <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />;
            </ThemeProvider>
      </Grid>
      
    </div>
  )
}


