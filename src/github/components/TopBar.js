import React from 'react'
import { Toolbar, Avatar, Button } from 'react-md'
import { connect } from 'react-redux'

import { onUpdateUser, onUpdateRepos } from '../actions/actionsCreators'

const TopBar = ({ user, updateUser, updateRepos }) => {
  const updateAll = () => {
    updateUser()
    updateRepos()
  }
  const avatar = user
    ? <Avatar key='avt' src={user.avatar_url} />
    : <Avatar key='avt' />
  const name = user ? user.login : ''
  const button = <Button onClick={updateAll} icon>replay</Button>
  return (
    <Toolbar fixed colored nav={avatar} title={name} actions={button} />
  )
}

const mapStateToProps = ({ user })=>{
  return {
    user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    updateUser() {
      dispatch(onUpdateUser())
    },
    updateRepos() {
      dispatch(onUpdateRepos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
