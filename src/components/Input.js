const Input = ({
  setList,
  handleAdd,
  editSubmit,
  list,
  inputRef,
  isEdit,
  dispatch,
}) => {
  return (
    <>
      <input
        value={list}
        ref={inputRef}
        onChange={(e) => dispatch(setList(e.target.value))}
        placeholder="enter......"
      />
      {!isEdit && <button onClick={() => handleAdd()}>Add Task</button>}
      {isEdit && <button onClick={() => editSubmit()}>Edit Task</button>}
    </>
  );
};
export default Input;
