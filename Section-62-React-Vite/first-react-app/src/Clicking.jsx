function handleClick() {
    console.log(`CLICKED THE BUTTON`);
}

function handleHover(){
    console.log(`HOVERED THE BUTTON`);
}


export default function Clicker() {
    return (
        <div>
            <p>Click the Button</p>
            <button onClick={handleClick} onMouseOver={handleHover}>Click</button>
        </div>
    );
}

