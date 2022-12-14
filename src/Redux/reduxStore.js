import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sideBar: sideBarReducer,
        usersp: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

//
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// window.store = store

export default store
