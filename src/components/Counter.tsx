import {useState} from "react";
import classes from './Counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className={classes.container}>
            <h1>
                {counter}
            </h1>
            <button className={classes.button} onClick={() => setCounter(counter + 1)}>
                increment
            </button>
        </div>
    );
};

export default Counter;
