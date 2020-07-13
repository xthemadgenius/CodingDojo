import React from 'react';

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
            <h1>ToDo List</h1>
            <input
                type="text"
                name="task"
                onChange={onChange} />
            <button onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Todo;
