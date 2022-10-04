import { useReducer, useRef, useState } from "react";
import { setList, addList, editList, deleteList } from "./actions/action";
import { reducer } from "./reducers/reducer";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import Lists from "./components/Lists";
import "antd/dist/antd.less";
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
    }
  };
  const editSubmit = (id) => {
    if (isEdit) {
      dispatch(editList({ id: findIndex(list, id), value: list }));
      //dispatch(addList(list));
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
  const findIndex = (taskList, id) => {
    let index = -1;
    taskList.forEach((t, i) => {
      if (t.id === id) {
        index = i;
      }
    });
    return index;
  };
  return (
    <div>
      <Title />

      <InputForm
        handleAdd={handleAdd}
        editSubmit={editSubmit}
        setList={setList}
        list={list}
        isEdit={isEdit}
        dispatch={dispatch}
      />

      <Lists
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        lists={lists}
      />
    </div>
  );
}

export default App;
