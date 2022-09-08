const init = {
    todos: [
        {
            title: 'Learn HTML/CSS',
            completed: true,
        }, 

        {
            title: 'Learn JavaScript',
            completed: false,
        }, 

    ]
};

export default function reducer(state = init, action, args) {
    switch (action) {
        // case:
        default:
            return state;
    }
}