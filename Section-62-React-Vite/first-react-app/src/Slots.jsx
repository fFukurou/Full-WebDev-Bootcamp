export default function Slots({val1, val2, val3}) {
    const isWin = val1 === val2 && val1 === val3;
    const color = isWin ? 'green' : 'red';
    const resultMsg = isWin ? 'You Win!' : 'You lose...';

    return (
        <div>
            <h1>{val1}  {val2}  {val3}</h1>
            <h2 style={{color: color}}>{resultMsg}</h2>
            <h2>{isWin && 'Congrats!!!'}</h2>
        </div>
    )
}