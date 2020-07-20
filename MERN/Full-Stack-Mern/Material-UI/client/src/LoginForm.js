import React from 'react';
import {Paper, FormControl, InputLabel, OutlinedInput, Button} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem",
        padding: "1rem"
    },
    input: {
        marginBottom: "rem"
    },
    button: {
        width: "100%"
    }
}

export default () => {
    return (
        <Paper elevation={3} style={styles.input}>
            <h2>Login Form</h2>
            <form>
                <FormControl varient="outlined" style={styles.input}>
                    <InputLabel>UserName</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl varient="outlined" style={styles.input}>
                    <InputLabel>E-Mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl varient="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl varient="outlined" style={styles.input}>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primay">
                    Register
                </Button>
            </form>
        </Paper>
    )
}