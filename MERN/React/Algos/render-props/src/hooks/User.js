import React, { useState } from 'react';
import useList from './useList';
 
export default () => {
    const [val, setVal] = useState('');
    const { list, add } = useList(['first', 'second']);
 
    function handleSubmit() {
        add(val);
        setVal('');
    }
 
    return (
        <>
            {list.map((item, i) => {<p key={i}>{item}</p>})}
            <input
                onChange={e => setVal(e.target.value)}
                value={val}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
} 