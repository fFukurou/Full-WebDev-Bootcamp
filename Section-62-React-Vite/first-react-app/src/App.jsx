// import { useState } from 'react';
import Chicken from "./Chicken.jsx";
import Greeter from "./Greeter.jsx";
import Die from "./Die.jsx";
import ListPicker from "./ListPicker.jsx";
import DoubleDice from "./DoubleDice.jsx";
import Heading from "./Heading.jsx";
import ColorList from "./ColorList.jsx";
import Slots from "./Slots.jsx";
import './App.css'
import ShoppingList from "./ShoppingList.jsx";
import PropertyList from "./PropertyList.jsx";
import Clicking from "./Clicking.jsx";
import Form from "./Form.jsx";
import Clicker from "./Clicker.jsx";

// const data = [
//   { id: 1, item: 'eggs', quantity: 12, completed: false},
//   { id: 2, item: 'milk', quantity: 1, completed: true},
//   { id: 3, item: 'chicken breasts', quantity: 4, completed: false},
//   { id: 4, item: 'carrots', quantity: 6, completed: true},
//   { id: 5, item: 'beans', quantity: 2, completed: false},
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];


function App() {
  return (
    <div>
      {/* <Greeter person="Spider-Man" from='fFukurou'/>
      <Die numSides={3}/>
      <Die numSides={20}/>
      <Die numSides={10}/> */}
      {/* <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a", "b", "c"]}/> */}
      {/* <Heading color="magenta" text="This is my heading come" fontSize="50px"/>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}

      {/* <ColorList colors={["red", "pink", "purple", "teal"]}/> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒"/>
      <Slots val1="🍒" val2="🍌" val3="🍒"/> */}
      {/* <ShoppingList items={data}/> */}

      {/* <PropertyList properties={properties}/> */}
      {/* <Form/>
      <Clicking/> */}
      <Clicker message="YES! YES!" buttonText="Please click me"/>
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click"/>
    </div>

  )
}

export default App
