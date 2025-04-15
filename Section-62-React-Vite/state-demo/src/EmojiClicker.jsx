import {v4 as uuid} from 'uuid';
import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "😎"}]);

    const addEmoji = () => {
        // This syntax copies all elements, and adds one to the end;d
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: "🙄"}]);
        
    }

    const deleteEmoji = (id) => {
        // delete emoji with the specified id
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id);
        })
    }

    const makeHearts = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map( e => {
                return {...e, emoji: "💘"};
            });
        });
    }


    return (
        <div>
            {/* Mapping each emoji to be a span, with an unique ID */}
            {emojis.map(e => <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>)}

            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeHearts}>Make them all hearts...</button>
        </div>
    )
}