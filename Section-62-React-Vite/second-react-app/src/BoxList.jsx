import ColorBox from "./ColorBox";
import "./BoxList.css";

export default function BoxList({colorsList, boxNum}) {

    const boxes = [];
    for ( let i = 0; i < boxNum; i++) {
        boxes.push(<ColorBox colorsList={colorsList}/>);
    }

    return (
        <div className="BoxList">
            {boxes}
        </div>
    )
}