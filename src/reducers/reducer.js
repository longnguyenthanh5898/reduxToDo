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
    // let newList = [...state.lists];
    // let prevInput = state.list;
    // let currInput = list;

    // // newList.replace(prevInput, currInput);
    // newList.replace(prevInput, currInput);
    // newState = {
    //   ...state,
    //   lists: [...newList],
    // };
    //////////////////////////////////////

    default:
      return new Error();
  }
  return newState;
};
