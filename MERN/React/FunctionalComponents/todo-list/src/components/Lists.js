import React from 'react';
import { TheTask, MainBtn, CheckMark } from './Styles';
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
        <CheckMark>
            {task.isComplete ?
                <TheTask className={style.isComplete}>{task.name}</TheTask> :
                <TheTask>{task.name}</TheTask>}
            <input type="checkbox" onChange={onChange} checked={task.isComplete} />
            <MainBtn onClick={onClick}>X</MainBtn>
        </CheckMark>
    )
}

export default Lists;