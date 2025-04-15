import { useState } from "react";

export default function ScoreKeeper2({numPlayers= 5, target = 5}) {


    const [scores, setScores] = useState(Array(numPlayers).fill(0));

    // const incrementScore = (idx) => {
    //     setScores(prevScores => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1;
    //         return copy;
    //     });
    // };
    const incrementScore = (idx) => {
        // setScores will take the previous iteration of scores by default
        setScores(prevScores => {
            // .map will return a new array, so we return it to setScores
            return prevScores.map((score, i) => {
                // if the idx of the button pressed matches one of the indexes of the original score list (it will), increment the value at the index by 1
                if (i === idx) return score + 1;
                // if not, we do not increment the other buttons
                return score;
            });
        });
    };

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }


    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return <li key={idx}>Player {idx + 1}: {score}
                    <button onClick={() => incrementScore(idx)}>+1</button>
                     {score >= target && 'WINNER!'}
                    </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}