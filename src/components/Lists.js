const Lists = ({ handleEdit, handleDelete, lists }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <li key={index}>
          {list}
          <button onClick={() => handleEdit(index)}>EDIT</button>
          <button onClick={() => handleDelete(index)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};
export default Lists;
