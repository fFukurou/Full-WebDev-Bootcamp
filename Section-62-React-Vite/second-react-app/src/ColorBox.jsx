import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({colorsList}) {
    const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];

    const [color, setColor] = useState(randomChoice(colorsList));

    const changeColor = () => setColor(randomChoice(colorsList));

    return (
        <div style={{backgroundColor: color}} className="ColorBox" onClick={changeColor}>

        </div>
    )


}