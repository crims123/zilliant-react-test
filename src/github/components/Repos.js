import React, { Component } from 'react'
import { CircularProgress } from 'react-md'
import { connect } from 'react-redux'


import RepoList from './RepoList'
import RepoDetail from './RepoDetail'
import { onUpdateRepos, onSelectRepo, onUnSelectRepo} from '../actions/actionsCreators'

class Repos extends Component {
  componentDidMount() {
    const { updateRepos, lastSuccessfulReposFetch } = this.props

    const now = new Date()
    if (!lastSuccessfulReposFetch) {
      updateRepos()
    } else if ((now - lastSuccessfulReposFetch) / 1000 > 300) {
      updateRepos()
    }
  }

  render() {
    const {
      isFetchingRepos,
      repos,
      selectedRepo,
      selectRepo,
      unselectRepo
    } = this.props
    console.log(repos)
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unselectRepo={unselectRepo} />
          : <RepoList repos={repos} selectRepo={selectRepo} />
    )
  }
}

const mapStateToProps = ({ lastSuccessfulReposFetch, isFetchingRepos, repos, selectedRepo })=>{
  return {
    lastSuccessfulReposFetch,
    isFetchingRepos,
    repos,
    selectedRepo
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    updateRepos() {
      dispatch(onUpdateRepos())
    },
    selectRepo() {
      dispatch(onSelectRepo())
    },
    unselectRepo() {
      dispatch(onUnSelectRepo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
