import { Div, P } from "../lib/elements.js";
import ProductButton from "./ProductButton.js";
const ProductBottom = ({ name, price }) => {
    return {
        element: Div(null, { class: "product-bottom" }),
        children: [
            {
                element: Div(null, { class: "product-info" }),
                children: [
                    { element: P(name, { class: "product-name" }) },
                    { element: P(`$${price}`, { class: "product-price" }) },
                ],
            },
            ProductButton(),
        ],
    };
};
export default ProductBottom;
