import React, { useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./styleComment.js";
import { ButtonDesign, FormDesign } from "./styleComment";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export const Comment = () => {

    const classes = useStyles();
    const [values, setValues] = useState({
        showComments: false,
        id: 0,
        author: "",
        data: ""
    })
    const [qualifier, setQualifier] = useState(null)
    const handleChange = e => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const addComment = (author, body, totalRate) => {
        const rating = {
            "author": author,
            "data": body,
            "rate": totalRate
        }
        alert(author + " Acabamos de registrar tu comentario y gracias por la calificacion de " + qualifier)
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(values.author, values.data, qualifier);
    }
    const ratingChanged = (e, newRating) => {
        setQualifier(newRating);
        
    };
    return (
        <div className="comment-box">
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="stretch"
                style={{ overflowY: "auto" }}>
                <Grid item xs={8}>
                    <h1>Califica el proyecto y deja un comentario </h1>
                    <FormDesign className="form" onSubmit={handleSubmit}>
                        <Grid item xs={11}>
                            <div className={classes.root}>
                                <Rating align-content="center" size="large" name="qualifier" precision={1} value={qualifier} onChange={ratingChanged} />
                            </div>
                            <div className="comment-form-fields">
                                <TextField style={{
                                    width: "50%",
                                    margin: "1rem 0",
                                }} placeholder="Name" required name="author" value={values.author} onChange={handleChange} /><br />

                                <TextField style={{
                                    width: "50%",
                                    margin: "1rem 0",
                                }}
                                    id="standard-multiline-static"
                                    label="Comment"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                    required name="data" value={values.data} onChange={handleChange}
                                />                                
                            </div>
                            <div className="comment-form-actions">
                                <ButtonDesign className="button" type="submit">
                                    ¡Comentar!
                        </ButtonDesign>
                            </div>
                            <h2>Tus comentarios ayudaran a la mejora del proyecto!</h2>
                        </Grid>
                    </FormDesign>
                </Grid>
            </Grid>
        </div>
    )
}

