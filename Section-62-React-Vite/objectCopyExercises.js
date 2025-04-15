const todos = [
    { id: 1, task: 'Walk dog', completed: false },
    { id: 2, task: 'Make dinner', completed: true },
    { id: 3, task: 'Write React app', completed: false }
];

// Write code that toggles the completed field for the todo with id 3.
const newTodo = todos.map((todo) => {  
    if (todo.id === 3) {
        return {...todo, completed: !todo.completed}
    } else {
        return todo;
    }
})

// console.log(newTodo);

const players = [
    { id: 1, name: 'Alex', score: 0 },
    { id: 2, name: 'Maya', score: 2 },
    { id: 3, name: 'Chris', score: 4 }
];

// Write code that increases the score of player with id 2 by 1, without mutating the original array.

const newPlayers = players.map(player => {
    if (player.id === 2) {
        return {...player, score: player.score + 1};
    } else {
        return player;
    }
 });

//  console.log(newPlayers);



 const cart = [
    { id: 1, item: 'Laptop', price: 1200 },
    { id: 2, item: 'Notebook', price: 3 },
    { id: 3, item: 'Backpack', price: 60 }
];

// : Filter out all items with a price greater than or equal to 100.
const newCart = cart.filter(item => item.price < 100);

// console.log(newCart);

const user = {
    id: 1,
    name: 'Sam',
    address: {
        street: '123 Apple St',
        city: 'Cupertino'
    }
};

// Create a new user object where the city is updated to 'San Francisco', without mutating the original.

const newUser = {
    ...user,
    address: {
        ...user.address,
        city: 'San Francisco'
    }
};

// console.log(newUser);

const post = {
    id: 1,
    title: 'React is Awesome',
    comments: ['Nice post!', 'Loved it']
};
//  Create a new post object with an added comment '🔥🔥🔥', leaving the original untouched.

const newPost = {
    ...post,
    comments: [...post.comments, "FIRE"]
}

// console.log(newPost);

const products = [
    { id: 1, name: "Keyboard", isFavorite: false },
    { id: 2, name: "Mouse", isFavorite: false },
    { id: 3, name: "Monitor", isFavorite: true },
  ];
  
//    Toggle isFavorite for the product with id === 2.

const newProducts = products.map(product => {
    if (product.id === 2) {
        return {...product, isFavorite: !product.isFavorite}
    } else {
        return product;
    }
})

// console.log(newProducts);

const todos2 = [
    { id: 1, task: "Wash dishes", completed: false },
    { id: 2, task: "Do laundry", completed: true },
    { id: 3, task: "Take out trash", completed: true },
  ];
  
//   Create a new array that only includes tasks that aren't completed.

const newTodos2 = todos2.filter(todo => todo.completed !== true);

// console.log(newTodos2);

const formData = {
    name: "",
    email: "",
    password: ""
  };
  
// Update the value of the email key to "test@example.com" immutably.

const newFormData = {
    ...formData,
    email: "test@example.com"
}

// console.log(newFormData);



const counters = [
    { id: 1, count: 3 },
    { id: 2, count: 7 },
    { id: 3, count: 1 },
  ];
  
//   Reset all counts to 0.

const zeroCounters = counters.map(counter => {
    return {...counter, count: 0};
})

// console.log(zeroCounters);


const user2 = {
    id: 1,
    name: "Alice",
    cart: [
      { id: 101, product: "Shampoo", qty: 1 }
    ]
  };
//   Add { id: 102, product: "Toothpaste", qty: 1 } to the cart.

const newUser2 = {
    ...user2,
    cart: [...user2.cart, { id: 102, product: "Toothpaste", qty: 1 }]
};

// console.log(newUser2); 


const formState = {
    username: "cool_user",
    email: "cool@example.com",
  };
  const field = "email";
  const value = "updated@example.com";
  
//    Update the email field using the field and value variables (without hardcoding "email").

const newFormState = {
    ...formState,
    [field]: value

}

// console.log(newFormState);

const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
  ];

//   Remove the image at index 1.

const newImages = images.filter((image, idx) => idx !== 1);

console.log(newImages);
