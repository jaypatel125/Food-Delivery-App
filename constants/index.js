export const categories = [
  {
    id: 1,
    name: "American",
    image: require("../assets/images/burger.png"),
  },
  {
    id: 2,
    name: "Italian",
    image: require("../assets/images/pizza.png"),
  },
  {
    id: 3,
    name: "Mexican",
    image: require("../assets/images/salad.png"),
  },
  {
    id: 4,

    name: "Japanese",
    image: require("../assets/images/noodle.png"),
  },
  {
    id: 5,
    name: "Chinese",
    image: require("../assets/images/soup.png"),
  },
  {
    id: 6,
    name: "Dessert",
    image: require("../assets/images/dessert.png"),
  },
];

export const pizzaShops = {
  id: 1,
  title: "Authentic Pizza Joints",
  description: "Savor the taste of authentic pizzas from top pizzerias.",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: require("../assets/images/papajohn.jpeg"),
      description:
        "Indulge in the crispy goodness of Pepperoni Pizza at Papa Johns.",
      lng: -79.9188239,
      lat: 43.264743,
      address: "1234, 5th Avenue ",
      rating: 4.3,
      reviews: 932,
      categories: "Italian Pizza",
      dishes: [
        {
          id: 1,
          name: "Pepperoni Pizza",
          description:
            "Classic pepperoni pizza topped with premium ingredients.",
          price: 11.99,
          image: require("../assets/images/PepperoniPizza.jpg"),
        },
        {
          id: 2,
          name: "BBQ Chicken Pizza",
          description:
            "Experience the tangy delight of BBQ chicken with onions on a pizza.",
          price: 13.99,
          image: require("../assets/images/BBQChicken.jpg"),
        },
        {
          id: 3,
          name: "Garlic Breadsticks",
          description:
            "Savor the aroma of freshly baked breadsticks with garlic butter.",
          price: 4.99,
          image: require("../assets/images/GarlicBreadsticks.jpg"),
        },
      ],
    },
    {
      id: 2,
      name: "Dominos",
      image: require("../assets/images/dominos.jpeg"),
      description:
        "Experience the cheesy paradise with a wide range of pizzas at Dominos.",
      lng: -79.938974,
      lat: 43.2202607,
      address: "2, Northwind Ave ",
      rating: 4.0,
      reviews: 575,
      categories: "Italian Fast Food",
      dishes: [
        {
          id: 1,
          name: "Margherita Pizza",
          description: "Simplicity at its best with classic Margherita Pizza.",
          price: 9.99,
          image: require("../assets/images/Margherita.jpg"),
        },
        {
          id: 2,
          name: "Supreme Pizza",
          description: "Indulge in a pizza loaded with a variety of toppings.",
          price: 14.99,
          image: require("../assets/images/Supreme.jpg"),
        },
        {
          id: 3,
          name: "Chicken Wings",
          description:
            "Add a spicy twist to your meal with our buffalo chicken wings.",
          price: 8.99,
          image: require("../assets/images/Wings.jpg"),
        },
      ],
    },
    {
      id: 3,
      name: "Pizza Hut",
      image: require("../assets/images/pizzahut.jpeg"),
      description:
        "Enjoy a family-friendly dining experience with a variety of pizzas at Pizza Hut.",
      lng: -79.93,
      lat: 43.22,
      address: "434, Second Street ",
      rating: 4.2,
      reviews: 293,
      categories: "American Pizza",
      dishes: [
        {
          id: 1,
          name: "Hawaiian Pizza",
          description:
            "Escape to the tropics with our Hawaiian Pizza featuring ham, pineapple, and cheese.",
          price: 12.99,
          image: require("../assets/images/Hawaiian.jpg"),
        },
        {
          id: 2,
          name: "Veggie Supreme Pizza",
          description:
            "Indulge in a veggie-packed delight with our Veggie Supreme Pizza.",
          price: 11.99,
          image: require("../assets/images/Veggie.jpg"),
        },
        {
          id: 3,
          name: "Stuffed Crust Pizza",
          description:
            "Experience the ooey-gooey delight of our cheese-filled Stuffed Crust Pizza.",
          price: 13.99,
          image: require("../assets/images/Stuffed.jpg"),
        },
      ],
    },
  ],
};

export const burgerShops = {
  id: 1,
  title: "Sizzling Burger Spots",
  description: "Treat yourself to mouthwatering burgers.",
  restaurants: [
    {
      id: 4,
      name: "KFC",
      image: require("../assets/images/kfc.jpeg"),
      description:
        "Experience the crunch with our signature Fried Chicken at KFC.",
      lng: -79.9629287,
      lat: 43.208574,
      address: "789, King Street ",
      rating: 4.2,
      reviews: 632,
      categories: "Fast Food Chicken",
      dishes: [
        {
          id: 1,
          name: "Fried Chicken",
          description:
            "Savor the original flavor of our secret recipe Fried Chicken.",
          price: 9.99,
          image: require("../assets/images/FriedChicken.jpg"),
        },
        {
          id: 2,
          name: "Chicken Burger",
          description:
            "Sink your teeth into the juicy goodness of our Chicken Burger.",
          price: 7.99,
          image: require("../assets/images/ChickenBurger.jpg"),
        },
        {
          id: 3,
          name: "Fries",
          description:
            "Add a side of golden and crispy Fries to complete your meal.",
          price: 2.99,
          image: require("../assets/images/Fries.jpg"),
        },
      ],
    },
    {
      id: 7,
      name: "McDonald's",
      image: require("../assets/images/mcd.jpeg"),
      description: "Delight in world-famous burgers and fries at McDonald's.",
      lng: -79.8952996,
      lat: 43.2018698,
      address: "678, Oak Street ",
      rating: 4.3,
      reviews: 812,
      categories: "Fast Food Burgers",
      dishes: [
        {
          id: 1,
          name: "Big Mac",
          description:
            "Experience the iconic taste of our Big Mac with two all-beef patties.",
          price: 5.99,
          image: require("../assets/images/BigMac.jpg"),
        },
        {
          id: 2,
          name: "McChicken",
          description:
            "Indulge in the crispy delight of our McChicken sandwich.",
          price: 4.49,
          image: require("../assets/images/McChicken.jpg"),
        },
        {
          id: 3,
          name: "French Fries",
          description:
            "Enjoy our classic French Fries, golden and crispy to perfection.",
          price: 2.49,
          image: require("../assets/images/FrenchFries.jpg"),
        },
      ],
    },

    {
      id: 8,
      name: "Burger King",
      image: require("../assets/images/burgerking.jpeg"),
      description: "Indulge in flame-grilled burgers at Burger King.",
      lng: -79.869064,
      lat: 43.257238,
      address: "789, Queen Street ",
      rating: 4.5,
      reviews: 975,
      categories: "Fast Food Burgers",
      dishes: [
        {
          id: 1,
          name: "Whopper",
          description: "Taste the flame-grilled goodness of our Whopper.",
          price: 6.99,
          image: require("../assets/images/Whopper.jpg"),
        },
        {
          id: 2,
          name: "Cheeseburger",
          description: "Classic cheeseburger with melted cheese.",
          price: 4.99,
          image: require("../assets/images/Cheeseburger.jpg"),
        },
        {
          id: 3,
          name: "Chicken Nuggets",
          description: "Crispy and juicy chicken nuggets.",
          price: 3.99,
          image: require("../assets/images/ChickenNuggets.jpg"),
        },
      ],
    },
  ],
};
export const otherShops = {
  id: 1,
  title: "Exciting Alternatives",
  description: "Explore a variety of cuisines and delights.",
  restaurants: [
    {
      id: 5,
      name: "Taco Bell",
      image: require("../assets/images/tacobell.jpeg"),
      description: "Satisfy your Tex-Mex cravings with a trip to Taco Bell.",
      lng: -79.8893655,
      lat: 43.2583532,
      address: "567, Queen Street ",
      rating: 4.0,
      reviews: 421,
      categories: "Mexican Tex-Mex",
      dishes: [
        {
          id: 1,
          name: "Taco",
          description:
            "Enjoy the crunch of our Beef Taco filled with lettuce and cheese.",
          price: 3.49,
          image: require("../assets/images/Taco.jpg"),
        },
        {
          id: 2,
          name: "Burrito",
          description:
            "Savor the flavor of our Bean and Cheese Burrito bursting with goodness.",
          price: 5.99,
          image: require("../assets/images/Burrito.jpg"),
        },
        {
          id: 3,
          name: "Quesadilla",
          description:
            "Delight in the cheesy goodness of our Cheese and Chicken Quesadilla.",
          price: 6.99,
          image: require("../assets/images/Quesadilla.jpg"),
        },
      ],
    },
    {
      id: 6,
      name: "Chipotle",
      image: require("../assets/images/chipotle.jpeg"),
      description: "Experience the freshness of Mexican cuisine at Chipotle.",
      lng: -79.943533,
      lat: 43.229361,
      address: "789, King Street ",
      rating: 4.4,
      reviews: 548,
      categories: "Mexican Style Burrito Bowls",
      dishes: [
        {
          id: 1,
          name: "Burrito Bowl",
          description: "Customize your own bowl with our fresh ingredients.",
          price: 7.99,
          image: require("../assets/images/BurritoBowl.jpg"),
        },
        {
          id: 2,
          name: "Barbacoa Tacos",
          description: "Enjoy our tender and flavorful barbacoa tacos.",
          price: 3.99,
          image: require("../assets/images/Taco.jpg"),
        },
        {
          id: 3,
          name: "Chips and Guacamole",
          description: "Savor our crispy chips with fresh guacamole.",
          price: 4.49,
          image: require("../assets/images/guac.jpg"),
        },
      ],
    },
    {
      id: 7,
      name: "Subway",
      image: require("../assets/images/subway.jpeg"),
      description:
        "Enjoy fresh and customizable subs and sandwiches at Subway.",
      lng: -79.989429,
      lat: 43.21628,
      address: "345, Main Street ",
      rating: 3.8,
      reviews: 367,
      categories: "Fast Food Sandwiches",
      dishes: [
        {
          id: 1,
          name: "Subway Melt",
          description:
            "Indulge in the savory combination of turkey, ham, bacon, and cheese in our Subway Melt.",
          price: 8.49,
          image: require("../assets/images/Melt.jpg"),
        },
        {
          id: 2,
          name: "Veggie Delight",
          description:
            "Experience the freshness of our Veggie Delight sandwich loaded with fresh veggies and cheese.",
          price: 7.49,
          image: require("../assets/images/VeggieSub.jpg"),
        },
        {
          id: 3,
          name: "Meatball Marinara",
          description:
            "Savor the hearty goodness of meatballs in marinara sauce in our Meatball Marinara sub.",
          price: 6.99,
          image: require("../assets/images/Meatball.jpg"),
        },
      ],
    },
  ],
};
