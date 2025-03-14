function useState(initialValue) {
    let state = initialValue;
    const getState = function () {
        return state;
    };
    getState.subscriptions = [];
    function setState(newValue, ignore = false) {
        state = newValue;
        if (!ignore) {
            getState.subscriptions.forEach((effect) => effect(state));
        }
    }
    return [getState, setState];
}
export default useState;
