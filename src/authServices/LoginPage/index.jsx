import React from "react";
import {AuthForm} from "../../components";
import background from './background.png'
import {FormSection, Wrapper} from "./styles";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useAuth} from "../Auth";

export const LoginPage = ({test}) => {
    const useStyles = makeStyles((theme) => ({
        img: {
            width: "100%",
            height: "100%"
        },
    }));
    const styles = useStyles();
    return (
        <Wrapper>
            <Grid container direction="row" justify="flex-end" alignItems="stretch">
                <Grid item xs={6}>
                    <img className={styles.img} alt=""
                         src={background}/>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="space-around" alignItems="center">
                        <div>
                            <FormSection>
                                <Typography>
                                    Bienvenido de vuelta
                                </Typography>
                                <Typography variant='h4' style={{fontWeight: 700}}>
                                    Ingresa a tu cuenta
                                </Typography>
                                <AuthForm functions={useAuth()}/>
                                <Typography>
                                    ¿No tienes una cuenta? Registrate gratis hoy!
                                </Typography>
                            </FormSection>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}
