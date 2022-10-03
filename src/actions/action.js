export const SET_LIST = "set_list";
export const ADD_LIST = "add_list";
export const EDIT_LIST = "edit_list";
export const DELETE_LIST = "delete_list";

export const setList = (payload) => {
  return {
    type: SET_LIST,
    payload,
  };
};
export const addList = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  };
};
export const editList = (payload) => {
  return {
    type: EDIT_LIST,
    payload: payload,
  };
};
export const deleteList = (payload) => {
  return {
    type: DELETE_LIST,
    payload,
  };
};
