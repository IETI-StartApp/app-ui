import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                StartApp
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = ({ title}) => {

    return (
        <footer style={{
            backgroundColor: 'transparent',
            padding: '6px',
        }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Copyright/>
            </Container>
        </footer>
    );
}
