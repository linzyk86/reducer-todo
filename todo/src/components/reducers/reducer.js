import React from 'react';

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];
// need to set up completed or setCompleted to add a class that crosses it out.  

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { completed: false, item: action.payload, id: Date.now() }];

        case 'TOGGLE_COMPLETED':
            return { ...state, completed: !state.toggleCompleted }

        default:
            return state;
    }


}