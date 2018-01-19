import axios from "axios";
import { FETCH_USER, ADD_DATA } from "./types";

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const addData = values => {
  return function(dispatch) {
    axios
      .post("/api/regist", values)
      .then(res => dispatch({ type: ADD_DATA, payload: res.data }));
  };
};
