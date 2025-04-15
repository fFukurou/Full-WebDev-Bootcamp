export default function Clicker({message, buttonText}) {
    return (
        <button onClick={() => alert(message)}>{buttonText}</button>
    )
}