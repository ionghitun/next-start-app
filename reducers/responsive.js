export default (state = {
    width: 0,
    height: 0
}, action) => {
    switch (action.type) {
        case 'WINDOW_RESIZE':
            state = {...state, ...action.payload};
            break;
        default:
            return state;
    }

    return state;
};
