import React from "react";

import "./styles.js";
import {Wrapper} from "./styles";
import {Typography, withStyles} from "@material-ui/core";
/*
<Button green onClick={() => console.log("HOLA")} >
              Start Investing
            </Button>
 */
export const CustomTypography = withStyles({
    root: {
        color: props => props.text
    }
})(Typography);

export const Button = ({
                           children,
                           onClick,
                           color,
                           textColor,
                           widthFull
                       }) => {
    return (
        <Wrapper widthFull={widthFull} color={color} onClick={onClick}>
            <CustomTypography text={textColor}>
                {children}
            </CustomTypography>
        </Wrapper>
    );
};
