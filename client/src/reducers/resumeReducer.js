import { UPLOAD_RESUME } from "../actions/types";

export default function(state = { mongoresp: null }, action) {
  console.log(action);

  switch (action.type) {
    case UPLOAD_RESUME:
      console.log(action.payload.message, "this is resuRed");

      return { ...state, mongoresp: action.payload || false };

    default:
      return state;
  }
}
