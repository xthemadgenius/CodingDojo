import React, {useState} from 'react';
import {Paper, FormControl, InputLabel, OutlinedInput, Button} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem",
        padding: "1rem",
        margin: "20px auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

export default props => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitHandler} >

            </form>
        </Paper>
    )
}