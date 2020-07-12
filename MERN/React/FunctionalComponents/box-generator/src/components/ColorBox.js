import React from 'react';
import {Box} from './Styles';

const ColorBox = (boxes) => {
    return (
        <div>
            {boxes.map((value,i) =>
                <Box key={i} style={value.style}>
                    <p>Color: {value.color}</p>
                    <p>Height: {value.height}</p>
                </Box>
            )};
        </div>
    )
}

export default ColorBox;