export const categories = [
  {
    id: 1,
    name: "Fast Food",
    image: require("../assets/images/pizzaicon.png"),
  },
  {
    id: 2,
    name: "Italian",
    image: require("../assets/images/pizzaicon.png"),
  },
  {
    id: 3,
    name: "Mexican",
    image: require("../assets/images/pizzaicon.png"),
  },
  {
    id: 4,
    name: "American",
    image: require("../assets/images/pizzaicon.png"),
  },
  {
    id: 5,
    name: "Chinese",
    image: require("../assets/images/pizzaicon.png"),
  },
  {
    id: 6,
    name: "Dessert",
    image: require("../assets/images/pizzaicon.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: require("../assets/images/pizza.jpg"),
      description: "Hot and Spicy pizza",
      lng: -79.9188239,
      lat: 43.264743,
      address: "1234, 5th Avenue, Hamilton",
      rating: 4.5,
      reviews: 837,
      categories: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Pizza",
          description: "cheesy garlic pizza",
          price: 10.99,
          image: require("../assets/images/pizza.jpg"),
        },
        {
          id: 2,
          name: "Pasta",
          description: "creamy pasta",
          price: 12.99,
          image: require("../assets/images/pasta.jpg"),
        },
        {
          id: 3,
          name: "Burger",
          description: "cheese burger",
          price: 8.99,
          image: require("../assets/images/burger.jpg"),
        },
      ],
    },
    {
      id: 2,
      name: "Dominos",
      image: require("../assets/images/pizza.jpg"),
      description: "Hot and Spicy pizza",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "2, Northwind Ave, Hamilton",
      rating: 4.1,
      reviews: 475,
      categories: "",
      dishes: [
        {
          id: 1,
          name: "Pizza",
          description: "cheesy garlic pizza",
          price: 10.99,
          image: require("../assets/images/pizza.jpg"),
        },
        {
          id: 2,
          name: "Pasta",
          description: "creamy pasta",
          price: 12.99,
          image: require("../assets/images/pasta.jpg"),
        },
        {
          id: 3,
          name: "Burger",
          description: "cheese burger",
          price: 8.99,
          image: require("../assets/images/burger.jpg"),
        },
      ],
    },
    {
      id: 3,
      name: "Pizza Hut",
      image: require("../assets/images/pizza.jpg"),
      description: "Hot and Spicy pizza",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434, Second Street, Hamilton",
      rating: 3.9,
      reviews: 193,
      categories: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Pizza",
          description: "cheesy garlic pizza",
          price: 10.99,
          image: require("../assets/images/pizza.jpg"),
        },
        {
          id: 2,
          name: "Pasta",
          description: "creamy pasta",
          price: 12.99,
          image: require("../assets/images/pasta.jpg"),
        },
        {
          id: 3,
          name: "Burger",
          description: "cheese burger",
          price: 8.99,
          image: require("../assets/images/burger.jpg"),
        },
      ],
    },
  ],
};