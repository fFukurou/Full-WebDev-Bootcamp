import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }

    const addThree = () => {
        // count has not changed yet, the component has to re-render;
        // we don't get the new value of count until we re-render;
        // setCount( count + 1);
        setCount( currentCount => currentCount + 1);
        setCount( currentCount => currentCount + 1);
        setCount( currentCount => currentCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </div>
    );
}