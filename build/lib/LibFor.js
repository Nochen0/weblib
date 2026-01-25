"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LibFor(state, parent, mapF) {
    var prevState = state.get();
    var list = prevState.map(mapF);
    state.addEffect(function (currentState) {
        prevState.forEach(function (x, i) {
            if (currentState[i] && currentState[i] !== x) {
                var newItem = mapF(currentState[i]);
                list[i].replaceWith(newItem);
                list[i] = newItem;
            }
            else if (!currentState[i]) {
                list[i].remove();
                list = list.filter(function (_, index) { return index !== i; });
            }
        });
        if (currentState.length > prevState.length) {
            currentState.slice(prevState.length).forEach(function (x) {
                var libElement = mapF(x);
                parent.appendChild(libElement);
                list.push(libElement);
            });
        }
        prevState = currentState;
    });
    return list;
}
exports.default = LibFor;
