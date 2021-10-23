const data = [
    {
        do: "Accelerate the world's transition to sustainable energy"
    },
    {
        do: "Reduce space transportation costs to become a spacefaring civilization"
    },
];

const todos = (state = data, action) => {
    switch (action.type) {
        case 'create-todo':
            return [
                ...state,
                action.todo
            ]
        default:
            return state;
    }
}

export default todos;