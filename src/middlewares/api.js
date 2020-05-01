import axios from "axios";

import * as actions from "../actions/types";

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case actions.API_GET_IMAGE:
      next(action);
      axios
        .get("https://picsum.photos/200")
        .then((res) => {
          console.log(res);
          store.dispatch({
            type: actions.KEEP_IMAGE,
            payload: {
              img: res,
            },
          });
        })
        .catch((err) => {
          store.dispatch({
            type: actions.KEEP_IMAGE,
            payload: {
              img: "404",
            },
          });
        });
      break;
    default:
      next(action);
  }
};

export default api;
