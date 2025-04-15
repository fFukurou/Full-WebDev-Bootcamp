export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const isWinner = num1 === num2;
    const styles = {color: isWinner ? "green" : "red"};

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Dobule DICE</h2>
            {/* {isWinner ? <h3>You Win!</h3> : null} */}
            {isWinner&& <h3>You Win!</h3>}
            <p>Num1: {num1}</p> 
            <p>Num2: {num2}</p> 
        </div>
    )
}