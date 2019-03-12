import { DISMISS_ERROR } from "../actions/types";

export default function rootReducer(state, action) {
  switch(action.type) {
    case DISMISS_ERROR:
        return {
            ...state,
            errorMsg: null 
        }
    default: 
    return state;
  }
}

