import React from 'react';
import { BoxSetUp, Colorful } from './BoxStyle';

const BoxPlace = ({box}) => {
    return (
        <BoxSetUp>
            {box.boxes.map(function (box, i) {
                let styles = {
                    backgroundColor: box[0],
                    width: box[1] + "px",
                    height: box[1] + "px"
                }
                console.log(box[0]);
                console.log(box[1]);
                return <Colorful key={i} style={styles}></Colorful>
            })}
        </BoxSetUp>
    )
}

export default BoxPlace;