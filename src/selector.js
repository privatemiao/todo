const getVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all':
            return state;
        case 'active':
            return state.filter(t => !t.completed);
        case 'complected':
            return state.filter(t => t.completed);
        default:
            return state;
    }
}

export default getVisibleTodos;