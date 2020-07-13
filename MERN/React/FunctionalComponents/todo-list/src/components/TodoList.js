import React, { useState } from 'react';
import Todo from './Todo';
import Lists from './Lists';
import { Container } from './Styles';

const TodoList = () => {
    const [list, setList] = useState([]);

    return (
        <Container>
            <Todo list={list} setList={setList} />
            <div>
                {list.map((task, index) => (
                <Lists task={task} index={index} setList={setList} list={list} />
                ))}
            </div>
        </Container>
    );
}

export default TodoList;