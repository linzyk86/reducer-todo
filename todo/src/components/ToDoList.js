import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';


const ToDoList = () => {
    const [newToDo, setNewToDo] = useState("");
    const [toggleCompleted, setToggleCompleted] = useState("");

    const [state, dispatch]
        = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewToDo(e.target.value);//needs to be an array..?    
    };

    

    return (
        <div className="App">
            <h1>To-Do List</h1>

            <div>
                <form>
                    <label htmlFor="addToDo"></label>
                    <input
                        name="addToDo"
                        placeholder="Add To-Do"
                        value={newToDo}
                        onChange={handleChanges}
                    />
                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log(newToDo);
                        dispatch({ type: 'ADD_TODO', payload: newToDo })

                    }}>Add To-Do</button>
                </form>

                {state.map((todo) => (<h1>{todo.item}
                {todo.completed}{''}
                    <button onClick={() => dispatch({
                        type: 'TOGGLE_COMPLETED', payload: toggleCompleted
                    })}> Completed</button></h1>
                )
                )}


            </div>
        </div>
    );
};

export default ToDoList;