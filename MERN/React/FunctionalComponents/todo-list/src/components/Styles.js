import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    margin-left: auto;
    margin-right: auto;
`;
export const MainBtn = styled.button`
    height: 40px;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    color: white;
    background-color: #8520E9;
    border-radius: 20px;
    min-width: 40px
`;

export const TheTask = styled.label`
    width: 80%;
    color: black;
    font-weight: 600;
`;
export const CheckMark = styled.div`
    margin-top: 20px;
`;

export const CreateTask = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
`;