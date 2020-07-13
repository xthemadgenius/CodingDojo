  
import React from 'react';
import style from './Lists.module.css'

const Lists = (props) => {
    const { task, index, setList, list } = props;

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        })
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div className="container">
            {task.isComplete ?
                <h4 className={style.isComplete}>{task.name}</h4> :
                <h4 className="d-inline mr-2">{task.name}</h4>}
            <input type="checkbox" onChange={onChange} checked={task.isComplete} />
            <button onClick={onClick}>X</button>
        </div>
    )
}

export default Lists;