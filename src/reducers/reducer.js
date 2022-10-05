import { SET_LIST, ADD_LIST, EDIT_LIST, DELETE_LIST } from "../actions/action";
export const reducer = (state, action) => {
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
      const { id, value } = action.payload;

      const newList = [...state.lists];
      newList.splice(newList[id - 1], 1, value);
      console.log(
        // "||newList",
        // newList,
        "||id",
        id,
        // "||value",
        // value,
        "||newList[id - 1]",
        newList[id - 1]
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
