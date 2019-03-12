import { getUser, getRepos } from '../requests';
import { DISMISS_ERROR, SET_FETCHING_USER_STATE, FETCH_USER_SUCCESSFULLY, SET_ERROR_MESSAGE, SET_FETCHING_REPOS_STATE, FETCH_REPOS_SUCCESSFULLY } from "./types";

const onDismissError = () => ({
    type: DISMISS_ERROR
})

const onSetFetchingUserState = (fetchingState) => ({
    type: SET_FETCHING_USER_STATE,
    payload: fetchingState
})

const onSetFetchingReposState = (fetchingState) => ({
    type: SET_FETCHING_REPOS_STATE,
    payload: fetchingState
})

const onFetchUserSuccessfully = (data) => ({
    type: FETCH_USER_SUCCESSFULLY,
    payload: data
})

const onFetchReposSuccessfully = (data) => ({
    type: FETCH_REPOS_SUCCESSFULLY,
    payload: data
})

const onSetErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload: message
})

const onUpdateUser = () => {
    return (dispatch) => {
        dispatch(onSetFetchingUserState(true))
        getUser
        .then(res => {
            dispatch(onFetchUserSuccessfully(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(onSetErrorMessage('Could not fetch User :('))
            dispatch(onSetFetchingUserState(false))
        })
    }
  }

const onUpdateRepos = () => {
    return (dispatch) => {
        dispatch(onSetFetchingReposState(true))
        getRepos
        .then(res => {
            dispatch(onFetchReposSuccessfully(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(onSetErrorMessage('Could not fetch Repos :('))
            dispatch(onSetFetchingReposState(false))
        })
    }
  }
  
export { onDismissError, onUpdateUser, onUpdateRepos };