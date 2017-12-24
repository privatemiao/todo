let todoId = 0;

export const addTod = (content) => ({
    type: 'ADD_TODO',
    content,
    id: todoId++
});

