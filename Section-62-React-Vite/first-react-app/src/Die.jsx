export default function Die(props) {
    const roll = Math.floor(Math.random() * props.numSides) + 1;
    return (
        <div>
            <p>Die Roll {roll}</p>
        </div>
    )
}