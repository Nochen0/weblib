import { Button, Input, Li, Ul } from "../lib/Elements.js";
import { convertComponent } from "../lib/Lib.js";
function removeItem(event) {
    event.stopPropagation();
    this.remove();
}
const ListItemComponent = ({ name, description, id, }) => {
    const parent = Li(`${name}: ${description}`, { key: String(id) });
    return {
        parent,
        children: [
            {
                parent: Button("remove", {}, { click: [{ listener: removeItem.bind(parent) }] }),
            },
        ],
    };
};
const HomePage = () => {
    const parent = Ul(null);
    const name = Input(null);
    const description = Input(null);
    (async function () {
        const req = await fetch("/mock.json");
        const resp = await req.json();
        resp.forEach((item) => {
            parent.appendChild(convertComponent(ListItemComponent(item)));
        });
    })();
    function addItem() {
        parent.appendChild(convertComponent(ListItemComponent({
            name: name.value,
            description: description.value,
            id: Date.now(),
        })));
    }
    return {
        parent,
        children: [
            { parent: name },
            { parent: description },
            { parent: Button("Add", {}, { click: [{ listener: addItem }] }) },
        ],
    };
};
export default HomePage;
