import { useReducer, useRef } from "react";
const initState = {
  lists: [],
  list: "",
};
const SET_LIST = "set_list";
const ADD_LIST = "add_list";
const EDIT_LIST = "edit_list";
const DELETE_LIST = "delete_list";

const setList = (payload) => {
  return {
    type: SET_LIST,
    payload,
  };
};
const addList = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  };
};
const editList = (payload) => {
  return {
    type: EDIT_LIST,
    payload,
  };
};
const deleteList = (payload) => {
  return {
    type: DELETE_LIST,
    payload,
  };
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_LIST:
      newState = {
        ...state,
        list: action.payload,
      };
      break;
    case ADD_LIST:
      newState = {
        ...state,
        lists: [...state.lists, action.payload],
      };
      break;
    case DELETE_LIST:
      const currentList = [...state.lists];
      currentList.splice(action.payload, 1);

      newState = {
        ...state,
        //list: [...currentList],
        lists: [...currentList],
      };
      break;

    ////////////////////////////////////
    case EDIT_LIST:
      const newList = [...state.lists];
      const currentValue = state.list;
      // const currentInput = setList(currentValue);
      newList.splice(action.payload, 1, currentValue);
      console.log(action.payload, newList, currentValue);
      newState = {
        ...state,
        lists: [...newList],
      };
    //////////////////////////////////////

    default:
      return new Error();
  }
  return newState;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { list, lists } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addList(list));
    dispatch(setList(""));
    inputRef.current.focus();
  };
  const handleDelete = (index) => {
    dispatch(deleteList(index));
  };

  const handleEdit = (index) => {
    const currentInput = list;
    console.log(currentInput);
    dispatch(editList(index, currentInput));
  };
  return (
    <div>
      <h1>To do list</h1>
      <input
        value={list}
        ref={inputRef}
        onChange={(e) => dispatch(setList(e.target.value))}
        placeholder="enter......"
      />
      <button onClick={() => handleAdd()}>Add</button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>
            {list}
            <button onClick={() => handleEdit(index)}>EDIT</button>
            <button onClick={() => handleDelete(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
