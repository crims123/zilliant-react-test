import React, { Component } from 'react'
import { CircularProgress } from 'react-md'


import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

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

export default connect(Repos)
