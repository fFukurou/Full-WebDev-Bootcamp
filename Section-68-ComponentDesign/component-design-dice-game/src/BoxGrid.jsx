import Box from "./Box.jsx";
import { useState } from "react";

export default function BoxGrid() {
  const  [boxes, setBoxes] = useState([ false, false, false, false, false, false, false, false, false]);


  const reset = () => {
    setBoxes([ false, false, false, false, false, false, false, false, false] );
  }

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (idx === i) return !value;
        return value;
      });
    });
  };

  return (
    <div className="BoxGrid">
      {boxes.map((box, idx) => <Box key={idx} isActive={box} toggle={() => toggleBox(idx)}/>)}
      <button onClick={reset}>Reset</button>
    </div>
  )
}