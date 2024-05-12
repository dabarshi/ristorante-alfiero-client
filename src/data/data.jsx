import menuImg1 from "../assets/menu/menu1.jpg";
// import todaySpecialImg from "../assets/todaySpecial/pork.jpg";
import todaySpecialImg1 from "../assets/todaySpecial/todaySpecialImg1.jpg";
import todaySpecialImg2 from "../assets/todaySpecial/todaySpecialImg2.jpg";
import todaySpecialImg3 from "../assets/todaySpecial/todaySpecialImg3.jpg";
import todaySpecialImg4 from "../assets/todaySpecial/todaySpecialImg4.jpg";
// import slideImg1 from "../assets/slide/slideImg1.jpg";
import slideImg2 from "../assets/slide/slideImg2.jpg";
// import featuredImg1 from "../assets/custom/featuredImg1.jpg";
import featuredImg1 from "../assets/featuredImages/featuredImg1.jpg";
import featuredImg2 from "../assets/featuredImages/featuredImg2.jpg";
import featuredImg3 from "../assets/featuredImages/featuredImg3.jpg";
export const menuItems = [
  {
    optionName: "Home",
    link: "/",
  },
  {
    optionName: "Menu",
    link: "/menu",
  },
  {
    optionName: "About Us",
    link: "/about",
  },
];

export const heroImg = [
  {
    // img: slideImg1,
    img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Restaurant",
  },
  {
    img: slideImg2,
    // img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Restaurant",
  },
  {
    img: "https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Restaurant at dusk",
  },
];

export const FeaturedCardData = [
  {
    id: 1,
    img: featuredImg1,
    // img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pancake Stack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum recusandae totam quae eos soluta voluptatibus, amet quidem! Minima, maxime!",
    title: "Healthy & Tasty",
  },
  {
    id: 2,
    img: featuredImg2,
    // img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pancake Stack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum recusandae totam quae eos soluta voluptatibus, amet quidem! Minima, maxime!",
    title: "Healthy & Tasty",
  },
  {
    id: 3,
    img: featuredImg3,
    // img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pancake Stack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum recusandae totam quae eos soluta voluptatibus, amet quidem! Minima, maxime!",
    title: "Healthy & Tasty",
  },
];

export const WelcomeCardData = [
  {
    img: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Butchers story",
    title: "Welcome To Ristorante Alfiero",
    subTitle: "The Art Of Cookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    adress: {
      street: "140 WEST 4TH STREET",
      city: "NY, NY 10012",
      longitude: "212.260.1212",
      latitude: " 212.260.7049",
    },
  },
];

export const FoodCardData = [
  {
    id: 1,
    img: todaySpecialImg1,
    // img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pork Chop Dinner",
    title: "Pork Chop Dinner",
    price: "55",
  },
  {
    id: 2,
    img: todaySpecialImg2,
    // img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pork Chop Dinner",
    title: "Pork Chop Dinner",
    price: "55",
  },
  {
    id: 3,
    img: todaySpecialImg3,
    // img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pork Chop Dinner",
    title: "Pork Chop Dinner",
    price: "55",
  },
  {
    id: 4,
    img: todaySpecialImg4,
    // img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pork Chop Dinner",
    title: "Pork Chop Dinner",
    price: "55",
  },
];

export const FoodMenuData = [
  {
    id: 1,
    img: menuImg1,
    // img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/12/THUMB-LINK-2018-1200x675.jpg",
    alt: "chicken crispy roll",
    title: "Chicken Crispy Roll",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 66,
    category: "Main",
  },
  {
    id: 2,
    img: menuImg1,
    // img: "https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2011/02/baked-crab-mac-cheese-cropped-410x307.jpg",
    alt: "Baked Crab Cheese",
    title: "Baked Crab Cheese",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 42,
    category: "Main",
  },
  {
    id: 3,
    img: menuImg1,
    // img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Foie_gras_en_cocotte.jpg",
    alt: "Foie Gras",
    title: "Foie Gras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 88,
    category: "Main",
  },
  {
    id: 4,
    img: menuImg1,
    // img: "https://thaicaliente.com/wp-content/uploads/2022/02/Fried-Shirmp-Rolls-2-720x1080.webp",
    alt: "Cheese Shrimp Roll",
    title: "Cheese Shrimp Roll",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 68,
    category: "Main",
  },
  {
    id: 5,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1639024469010-44d77e559f7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Crispy Squid",
    title: "Crispy Squid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 38,
    category: "Main",
  },
  {
    id: 6,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Roasted Chicken",
    title: "Roasted Chicken",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 55,
    category: "Main",
  },
  {
    id: 7,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chicken Soup",
    title: "Chicken Soup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 6,
    category: "Starter",
  },
  {
    id: 8,
    img: menuImg1,
    // img: "https://media-cdn2.greatbritishchefs.com/media/1pljdgbh/img82191.whqc_768x512q80.webp",
    alt: "Polpette",
    title: "Polpette",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 4,
    category: "Starter",
  },
  {
    id: 9,
    img: menuImg1,
    // img: "https://rms.condenast.it/rms/public/5d3/f08/dba/thumb_3017_1200_670_0_0_auto.jpg",
    alt: "Caprino",
    title: "Caprino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 8,
    category: "Starter",
  },
  {
    id: 10,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1595587870672-c79b47875c6a?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Caprese Salad",
    title: "Caprese Salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 11,
    category: "Starter",
  },
  {
    id: 11,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Waffle",
    title: "Waffle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 3,
    category: "Starter",
  },
  {
    id: 12,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1595777358789-36e99912ccb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Calamary",
    title: "Calamary",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 5,
    category: "Starter",
  },
  {
    id: 13,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1619819583437-e846081761ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Limeade",
    title: "Limeade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 5,
    category: "Drinks",
  },
  {
    id: 14,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Milk Shake",
    title: "Milk Shake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 6,
    category: "Drinks",
  },
  {
    id: 15,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1610137312377-f2334bc3b279?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hot Tea",
    title: "Hot Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 3,
    category: "Drinks",
  },
  {
    id: 16,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Iced Tea",
    title: "Iced Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 5,
    category: "Drinks",
  },
  {
    id: 17,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Orange Juice",
    title: "Orange Juice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 7,
    category: "Drinks",
  },
  {
    id: 18,
    img: menuImg1,
    // img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Coffee",
    title: "Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 3,
    category: "Drinks",
  },
];

export const TestimonialData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aiony Haust",
    name: "Aiony Haust",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aiony Haust",
    name: "Aiony Haust",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aiony Haust",
    name: "Aiony Haust",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
