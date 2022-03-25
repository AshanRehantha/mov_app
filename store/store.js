import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducser from "./reducer";

const middleware = [thunk];
const initState = {};
const store = createStore (
    rootReducser,
    initState,
    compose(
        applyMiddleware(...middleware),
    )
)

export default store;