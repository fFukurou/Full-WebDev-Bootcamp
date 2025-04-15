export default function ColorList({colors}) {
    // colors is an array of strings
    // const lis = colors.map(color => <li style={{color: color}}>{color}</li>)
    return (
        <div>
            <p>Color List</p> 
            <ul>
                {colors.map(c => <li style={{color: c}}>{c}</li>)}
            </ul>
        </div>
    );
}