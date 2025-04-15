import ShoppingListItem from "./ShoppingListItem"

export default function ShoppingList({items}) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem 
                    key={i.id}
                    // We can just spread it here becaues the properties have teh same name
                    {...i}
                    // item={i.item}
                    // quantity={i.quantity}
                    // completed={i.completed}
                    />
            ))}
        </ul>
    )
}




// const data = [
//     {item: 'eggs', quantity: 12, completed: false},
//     {item: 'milk', quantity: 1, completed: true},
//     {item: 'chicken breasts', quantity: 4, completed: false},
//     {item: 'carrots', quantity: 6, completed: true},
//     {item: 'beans', quantity: 2, completed: false},
//   ];