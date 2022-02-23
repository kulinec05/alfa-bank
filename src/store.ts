import {applyMiddleware, createStore} from "redux";
import {imagesReducer} from "./reducers/imagesReducer";
import thunk from "redux-thunk";



export const store = createStore(imagesReducer,applyMiddleware(thunk))