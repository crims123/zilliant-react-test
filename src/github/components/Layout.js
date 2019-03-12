import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'
import { connect } from 'react-redux'


import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { onDismissError, onUpdateUser } from '../actions/actionsCreators'

class Layout extends Component {

  componentDidMount() {
    const { updateUser, lastSuccessfulUserFetch } = this.props
    const now = new Date()
    if (!lastSuccessfulUserFetch) {
      updateUser()
    } else if ((now - lastSuccessfulUserFetch) / 1000 > 300) {
      updateUser()
    }
  }

  render() {
    const { isFetchingUser, children, errorMsg, dismissError } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] :[]
    console.log(isFetchingUser)
    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar />
              <div className='main-container'>
                <Sidebar />
                {children}
              </div>
            </div>
        }
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ errorMsg, lastSuccessfulUserFetch, isFetchingUser })=>{
  return {
    errorMsg,
    lastSuccessfulUserFetch,
    isFetchingUser
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    dismissError() {
      dispatch(onDismissError())
    },
    updateUser() {
      dispatch(onUpdateUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);