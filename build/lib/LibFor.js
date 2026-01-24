"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LibFor(state, parent, mapF) {
    var prevState = state.get();
    var list = prevState.map(mapF);
    state.addEffect(function (currentState) {
        prevState.forEach(function (x, i) {
            if (currentState[i] && currentState[i] !== x) {
                list[i].replaceWith(mapF(currentState[i]));
            }
            else if (!currentState[i]) {
                list[i].remove();
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
