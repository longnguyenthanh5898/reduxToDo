import { useReducer, useRef, useState } from "react";
import { setList, addList, editList, deleteList } from "./actions/action";
import { reducer } from "./reducers/reducer";
const initState = {
  lists: [],
  list: "",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { list, lists } = state;
  const inputRef = useRef();
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    if (!isEdit) {
      dispatch(addList(list));
      dispatch(setList(""));
      inputRef.current.focus();
    } else {
      //dispatch((list, index));
      dispatch(addList(list));
      dispatch(setList(""));
      inputRef.current.focus();
      setIsEdit(false);
    }
  };
  const handleDelete = (index) => {
    dispatch(deleteList(index));
  };

  const handleEdit = (index) => {
    dispatch(setList(lists[index]));

    setIsEdit(true);
  };
  console.log(lists);
  return (
    <div>
      <h1>To do list</h1>
      <input
        value={list}
        ref={inputRef}
        onChange={(e) => dispatch(setList(e.target.value))}
        placeholder="enter......"
      />
      {!isEdit && <button onClick={() => handleAdd()}>Add Task</button>}
      {isEdit && <button onClick={() => handleAdd()}>Edit Task</button>}

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
