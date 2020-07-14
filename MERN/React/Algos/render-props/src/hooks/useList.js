import { useState } from 'react';

export default (initialList = []) => {
    const [list, setList] = useState(initialList);

    function add(str) {
        setList([...list, str]);
    }

    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
    }

    return {
        list,
        add,
        remove
    };
}