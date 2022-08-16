import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sideBar: sideBarReducer,
        usersp: usersReducer
    }
)

let store = createStore(reducers)

export default store
