import { Button, Div } from "./Elements.js";
import router from "./Router.js";
const DefaultErrorPage = () => {
    function handleLink() {
        router.go("/src/");
    }
    return {
        parent: Div(null),
        children: [
            { parent: Div("Error not found 404") },
            { parent: Button("Home", {}, { click: [{ listener: handleLink }] }) },
        ],
    };
};
export default DefaultErrorPage;
