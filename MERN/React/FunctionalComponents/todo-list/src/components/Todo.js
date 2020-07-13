import React from 'react';
import  { CreateTask, MainBtn } from './Styles';

const Todo = (props) => {
    const { list, setList } = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = e => {
        task.name = e.target.value;
    }

    const onClick = e => {
        setList([...list, task]);
    }

    return (
        <div>
            <h1>To Do List</h1>
            <CreateTask
                type="text"
                name="task"
                onChange={onChange} />
            <MainBtn onClick={onClick}>Add Task</MainBtn>
        </div>
    )
}

export default Todo;
