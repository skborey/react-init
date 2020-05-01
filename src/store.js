import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";
import { api } from "./middlewares";

export default createStore(reducer, applyMiddleware(api));
