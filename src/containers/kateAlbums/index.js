import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'redux/actions/album'
import Albums from 'components/albums'

class AlbumContainer extends Component {
  render() {
    return (
      <Albums albums={this.props.albums} get={() => this.props.dispatch(get())} />
    )
  }
}

export default connect((state) => state.albums)(AlbumContainer)
