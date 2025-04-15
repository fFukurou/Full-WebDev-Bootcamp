export default function Greeter(props) {
    return (
        <>
            <h1>Hi there, {props.person}!</h1>
            <h2>{props.from} sends his regards</h2> 
        </>
    )
}