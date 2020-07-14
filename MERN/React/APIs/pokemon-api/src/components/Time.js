import React, {useState, useEffect} from 'react';
import Clicks from './Clicks';

const Time = (props) => {

    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {

        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );

        return function clearInt() {
            clearInterval(int);
        }
    }, []);

    return (
        <div> 
            <p>Current Time: {time}</p> 
            <Clicks/>
        </div>
    );
}
export default Time;
