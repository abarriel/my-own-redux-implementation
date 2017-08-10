export const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];
    const subscribe = cb => listeners.push(cb);
    const dispatch = action => {
        state = reducer(state, action);
        console.log(st ate);
        listeners.forEach(cb => cb(state));
        return action;
    };
    const getState = () => initialState;
    return { getState };
};