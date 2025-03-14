import { Div, Img } from "../lib/elements.js";
import ProductBottom from "./ProductBottom.js";
const Product = ({ src, name, price }) => {
    return {
        element: Div(null, { class: "product" }),
        children: [
            {
                element: Img(null, {
                    src,
                    width: "450px",
                    class: "product-image",
                }),
            },
            ProductBottom({ name, price }),
        ],
    };
};
export default Product;
