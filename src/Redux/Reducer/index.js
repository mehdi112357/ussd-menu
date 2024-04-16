import { combineReducers } from "redux";
import auth from "./authSlice";
import simulator from "./simulatorSlice";
import tree from "./treeSlice";

const appReducer = combineReducers({
    auth,
    simulator,
    tree
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
