import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sideBar: sideBarReducer
    }
)

let store = createStore(reducers)

export default store