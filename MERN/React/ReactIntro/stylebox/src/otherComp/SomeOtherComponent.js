import React from 'react';
import StyledBox from './StyledBox';


const SomeOtherComponent = () => (
    <div>
        <StyledBox $bgColor="blue"/>
        <StyledBox $bgColor="red" $height="200px" $minWidth="1200"/>
    </div>
)
export default SomeOtherComponent;