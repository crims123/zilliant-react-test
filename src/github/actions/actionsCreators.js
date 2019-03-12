import { getUser, getRepos } from '../requests';
import { DISMISS_ERROR, SET_FETCHING_USER_STATE, FETCH_USER_SUCCESSFULLY, SET_ERROR_MESSAGE } from "./types";

const onDismissError = () => ({
    type: DISMISS_ERROR
})

const onSetFetchingUserState = (fetchingState) => ({
    type: SET_FETCHING_USER_STATE,
    payload: fetchingState
})

const onFetchUserSuccessfully = (data) => ({
    type: FETCH_USER_SUCCESSFULLY,
    payload: data
})

const onSetErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload: message
})

const onUpdateUser = () => {
    return (dispatch, getState) => {
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

export { onDismissError, onUpdateUser };