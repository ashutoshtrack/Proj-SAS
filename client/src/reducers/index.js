import { combineReducers } from "redux";
import authReducer from "./authReducer";
import responseReducer from "./ResponseReducer";
import resumeReducer from "./resumeReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  respo: responseReducer,
  mongores: resumeReducer
});
