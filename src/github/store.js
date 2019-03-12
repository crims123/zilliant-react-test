import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];
const initialState = {
  user: null,
  repos: [],
  selectedRepo: null,
  isFetchingUser: false,
  isFetchingRepos: false,
  errorMsg: null,
  lastSuccessfulUserFetch: null,
  lastSuccessfulReposFetch: null
};
const store = createStore(rootReducer,initialState, compose(applyMiddleware(...middleware), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;
