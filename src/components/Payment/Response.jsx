import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Grid, Box, Divider, Typography, Paper } from '@material-ui/core';

export default function Response() {

    const classes = useStyles();

    useEffect(() => {
        let query = new URLSearchParams(window.location.search);
        fetch(`https://secure.epayco.co/validation/v1/reference/${query.get("ref_payco")}`)
            .then(response => {
                if (!response.ok) throw new Error('Response is NOT ok');
                return response.json();
            })
            .catch(() => console.log("error"))
            .then(response => {
                document.getElementById("ref").innerText = response.data.x_id_invoice;
                document.getElementById("date").innerText = response.data.x_transaction_date;
                document.getElementById("reason").innerText = response.data.x_response_reason_text;
                document.getElementById("bank").innerText = response.data.x_bank_name;
                document.getElementById("transaction").innerText = response.data.x_transaction_id;
                document.getElementById("total").innerText = response.data.x_amount + ' ' + response.data.x_currency_code;
            });
    }, []);

    return (
        <Grid item sm={8}>
            <Box mt={2} mb={4}>
                <Grid container justify="center">
                    <img className="center-block" src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/logo1.png" alt="logo"/>
                </Grid>
            </Box>
            <Box mb={3}>
                <Grid>
                    <Box p={2} mb={2}>
                        <Typography  variant="h6" component="h6">Respuesta de la Transacción</Typography>
                        <Divider></Divider>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Referencia</TableCell>
                                    <TableCell align="right" id="ref"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Fecha</TableCell>
                                    <TableCell align="right" id="date"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Motivo</TableCell>
                                    <TableCell align="right" id="reason"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Banco</TableCell>
                                    <TableCell align="right" id="bank"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Recibo</TableCell>
                                    <TableCell align="right" id="transaction"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Total</TableCell>
                                    <TableCell align="right" id="total"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Box>
            <Grid container justify="center">
                <img src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/pagos_procesados_por_epayco_260px.png" alt="epaycoimg"/>
                <img src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/credibancologo.png" height="40px" alt="epaycoimg2"/>
            </Grid>
    </Grid>
    );
}