import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const ButtonDesign = styled.button`
width: 100%;
height: 50px;
margin-top: 1px;
border-radius: 2px;
background: linear-gradient(90deg,
rgb(149, 7, 64) 0%,
rgb(127, 6, 54) 100%);
outline: none;
border: none;
align-content: center;
color: #fff;
font-size: 1rem;

`;

export const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0,
    },
    chatContainer: {
        margin: theme.spacing(2),
        height:"90vh", 
        display:"flex", 
        alignItems: "flex-end",
    },
    offset: theme.mixins.toolbar,
}));