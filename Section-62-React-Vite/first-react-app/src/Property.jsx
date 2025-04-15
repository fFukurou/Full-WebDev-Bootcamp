// import "./Property.css";
import PropTypes from 'prop-types';

export default function Property({name, rating, price}) {
    return (
        <div className="Property">
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}⭐</h4>
        </div>
    )
}



// const properties = [
//     { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//     { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//     { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//     { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//     { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//     { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
//   ];
  