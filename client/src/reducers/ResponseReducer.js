import { ADD_DATA } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case ADD_DATA:
      console.log(
        action.payload._user,
        "jabhi koi ladki dekhe dil diwaana bole ole ole ole ole"
      );
      return action.payload || false;

    default:
      return state;
  }
}
