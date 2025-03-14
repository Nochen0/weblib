import { Div, H2 } from "../lib/elements.js";
import Product from "./Product.js";
const data = [
    {
        src: "/images/blackamericano.png",
        name: "Black Americano",
        price: "1.50",
        category: "hot-coffee",
    },
    {
        src: "/images/blacktea.png",
        name: "Black Tea",
        price: "1.75",
        category: "tea",
    },
    {
        src: "/images/cappuccino.png",
        name: "Cappuccino",
        price: "3.75",
        category: "hot-coffee",
    },
    {
        src: "/images/coldbrew.png",
        name: "Cold Brew",
        price: "1.85",
        category: "iced-coffee",
    },
    {
        src: "/images/croissant.png",
        name: "Croissant",
        price: "2.80",
        category: "snack",
    },
    {
        src: "/images/flatwhite.png",
        name: "Flat White",
        price: "3.25",
        category: "hot-coffee",
    },
    {
        src: "/images/frappuccino.png",
        name: "Frappucino",
        price: "3.75",
        category: "iced-coffee",
    },
    {
        src: "/images/greentea.png",
        name: "Green Tea",
        price: "1.75",
        category: "tea",
    },
    {
        src: "/images/icedcoffee.png",
        name: "Iced Coffee",
        price: "3.15",
        category: "iced-coffee",
    },
    {
        src: "/images/macchiato.png",
        name: "Macchiato",
        price: "3.25",
        category: "hot-coffee",
    },
    {
        src: "/images/muffin.png",
        name: "Chocolate Chip Muffin",
        price: "1.75",
        category: "snack",
    },
];
const Products = () => {
    const hotCoffee = data
        .filter(({ category }) => category === "hot-coffee")
        .map((data) => Product(data));
    const icedCoffee = data
        .filter(({ category }) => category === "iced-coffee")
        .map((data) => Product(data));
    const tea = data
        .filter(({ category }) => category === "tea")
        .map((data) => Product(data));
    const snacks = data
        .filter(({ category }) => category === "snack")
        .map((data) => Product(data));
    return {
        element: Div(null, { id: "products" }),
        children: [
            {
                element: Div(null, { id: "products-box" }),
                children: [
                    { element: H2("HOT COFFEE") },
                    ...hotCoffee,
                    { element: H2("ICED COFFEE") },
                    ...icedCoffee,
                    { element: H2("TEA") },
                    ...tea,
                    { element: H2("SNACKS") },
                    ...snacks,
                ],
            },
        ],
    };
};
export default Products;
