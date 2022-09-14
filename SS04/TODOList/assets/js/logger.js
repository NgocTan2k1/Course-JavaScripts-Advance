export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('Prev State:\t\t', prevState);
        console.log('Action Arguments:\t', args);
        const nextState = reducer(prevState, action, args);
        console.log('Next State:\t\t', nextState);
        console.groupEnd();
        return nextState;
    }
}