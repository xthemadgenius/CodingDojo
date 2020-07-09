import React from 'react';
import styled from 'styled-components';

const Stylebox = styled.div`
    border: 1px solid light gray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;

export default Stylebox;

// Good JSX/CSS coding better to use this than CSS