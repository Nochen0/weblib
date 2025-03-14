export default function useEffect(effect, states) {
    states.forEach((state) => state.subscriptions.push(effect));
}
