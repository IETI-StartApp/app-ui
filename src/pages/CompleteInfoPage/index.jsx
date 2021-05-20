import React from 'react'
import globalTheme from '../../globalTheme'
import {ThemeProvider} from "@material-ui/core/styles";

export const CompleteInfo = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <div style={{height: "100px"}}>hola</div>
        </ThemeProvider>

    )
}
