import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';

const [state, dispatch] = useReducer(reducer, initialState);

const Form = () => {
  const handleSubmit ={

  }
  const onSubmit = {
      
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <label htmlFor="addToDo">Add To-Do</label>
          <input
            name="addToDo"
            placeholder="Add To-Do"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;