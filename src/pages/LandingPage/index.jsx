import React from 'react';
import Container from '@material-ui/core/Container';
import {Footer, Header, ItemContainer} from "../../components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SlideBar } from '../../components/SlideBar/SlideBar';


const IMG_URL = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80'

export const LandingPage = () => {
    return (
        <>
            <CssBaseline/>
            <Header title="StartApp"/>
            <Container maxWidth="lg">
                <main>
                    <ItemContainer img={IMG_URL}/>
                </main>
                <div style={{height: '30vh'}}><br/></div>
            </Container>
            <SlideBar/>
            <Footer title="StartApp"/>
        </>
    );
}
