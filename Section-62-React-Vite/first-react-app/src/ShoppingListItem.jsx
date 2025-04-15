import PropTypes from 'prop-types';


export default function ShoppingListItem({item: name, quantity, completed}) {
    const styles = {
        color: completed ? 'green' : 'red',
        textDecoration: completed ? 'line-through' : 'none'
    }

    return <li style={styles}>
        {name} - {quantity}
        </li>
}


ShoppingListItem.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
}

{/* <li key={i.id} style={{color: i.completed ? 'green' : 'red', textDecoration: i.completed ? 'line-through' : 'none'}}>{i.item} - {i.quantity}</li> */}