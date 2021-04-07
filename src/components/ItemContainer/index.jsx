import React from 'react';
import Paper from '@material-ui/core/Paper';

export const ItemContainer = ({img}) => {
    return (
        <Paper style={{
            backgroundImage: `url(${img})`,
            position: 'relative',
            marginBottom: '4px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh'
        }}/>
    );
}
