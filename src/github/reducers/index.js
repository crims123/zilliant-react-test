import { DISMISS_ERROR, SET_FETCHING_USER_STATE, FETCH_USER_SUCCESSFULLY, SET_ERROR_MESSAGE, SET_FETCHING_REPOS_STATE, FETCH_REPOS_SUCCESSFULLY } from "../actions/types";

export default function rootReducer(state, action) {
  switch(action.type) {
    case DISMISS_ERROR:
        return {
          ...state,
          errorMsg: null 
        }
    case SET_FETCHING_USER_STATE:
        return {
          ...state,
          isFetchingUser: action.payload 
        }
    case SET_FETCHING_REPOS_STATE:
        return {
          ...state,
          isFetchingRepos: action.payload 
        }
    case FETCH_USER_SUCCESSFULLY:
        return {
          ...state,
          user: action.payload,
          isFetchingUser: false,
          lastSuccessfulUserFetch: new Date()
        }
    case FETCH_REPOS_SUCCESSFULLY:
        return {
          ...state,
          repos: action.payload,
          isFetchingRepos: false,
          lastSuccessfulReposFetch: new Date()
        }
    case SET_ERROR_MESSAGE:
        return {
          ...state,
          errorMsg: action.payload
        }
    default: 
    return state;
  }
}

