import axios from "axios";
import {
  FETCH_USER,
  ADD_DATA,
  UPLOAD_RESUME,
  UPDATE_DATA,
  FETCH_REG
} from "./types";

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const fetchRegDetails = id => {
  return function(dispatch) {
    axios
      .get("/api/regist/" + id)
      .then(res => dispatch({ type: FETCH_REG, payload: res.data }));
  };
};

export const addData = values => {
  return function(dispatch) {
    axios
      .post("/api/regist", values)
      .then(res => dispatch({ type: ADD_DATA, payload: res.data }));
  };
};

export const updateData = values => {
  return function(dispatch) {
    axios
      .put("/api/regist/_id", values)
      .then(res => dispatch({ type: UPDATE_DATA, payload: res.data }));
  };
};

export const postResume = resume => {
  let formy = new FormData();
  formy.append("name", "lakshan");
  formy.append("file", resume);
  console.log("frpu", formy);
  return function(dispatch) {
    const config = {
      onUploadProgress: progressEvent => {
        console.log(
          "upload progress" +
            Math.round(progressEvent.loaded / progressEvent.total * 100) +
            "%"
        );
      },
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundary2UB2yluNFipmGTV5",
        "Content-Disposition": " form-data"
      }
    };

    axios
      .post(
        "/api/img",

        formy,
        config
      )
      .then(res => dispatch({ type: UPLOAD_RESUME, payload: res.data }));
  };
};
