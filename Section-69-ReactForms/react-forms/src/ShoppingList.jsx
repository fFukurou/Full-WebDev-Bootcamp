import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

export default function ShoppingList() {
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity: 8},
        {id: uuid(), product: "Eggs", quantity: 12},
    ]);

    const addItem = (item) => {
        setItems(currItems => {
            return [
                // create a copy of the items in the list
                ...currItems,
                // but add a new item, and then return
                {...item, id: uuid()}
            ];
        });
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}