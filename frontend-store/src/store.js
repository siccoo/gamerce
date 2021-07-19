import { data } from "./data";
import { createStore } from "redux"

const initialState = {};
const reducer = (state, action) => {
    return { data: data.products };
};

const store = createStore(initialState, reducer);

export default store;