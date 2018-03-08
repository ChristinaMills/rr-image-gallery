import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from '../image/actions';
import Album from './Album';

class Albums extends Component {

  componentDidMount(){
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <h1>Albums</h1>
        <ul>
          {/* {albums.map(album => <Album key={album.id} {...album}/>)} */}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums }
)(Albums);

