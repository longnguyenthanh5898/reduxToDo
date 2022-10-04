import { SET_LIST, ADD_LIST, EDIT_LIST, DELETE_LIST } from "../actions/action";
export const reducer = (state, action) => {
  // const findIndex = (taskList, id) => {
  //   let index = -1;
  //   taskList.forEach((t, i) => {
  //     if (t.id === id) {
  //       index = i;
  //     }
  //   });
  //   return index;
  // };
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
        lists: [...currentList],
      };

      break;

    ////////////////////////////////////
    case EDIT_LIST:
      //let index = findIndex(state.lists, action.id);
      const { id, value } = action.payload;

      const newList = [...state.lists];
      newList.splice(state.lists[id], 1, value);
      console.log(
        "action.data======",
        value,
        "action.id======",
        id,
        "state.lists[id]====",
        state.lists[id]
      );
      newState = {
        ...state,
        lists: [...newList],
      };
      break;

    //////////////////////////////////////

    default:
      return new Error();
  }
  return newState;
};
