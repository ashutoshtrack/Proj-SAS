import { ADD_DATA, UPDATE_DATA, FETCH_REG } from "../actions/types";

export default function(state = { respo: null }, action) {
  switch (action.type) {
    case ADD_DATA:
      console.log(
        action.payload._user,
        "jabhi koi ladki dekhe dil diwaana bole ole ole ole ole"
      );
      return { ...state, respo: action.payload || false };

    case UPDATE_DATA:
      console.log(action.payload._user, "jabhi koi ladki");
      return { ...state, respo: action.payload || false };

    case FETCH_REG:
      return { ...state, respo: action.payload || false };

    default:
      return state;
  }
}
