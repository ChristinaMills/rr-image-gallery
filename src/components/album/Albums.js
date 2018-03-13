import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from '../image/actions';
import Album from './Album';

class Albums extends Component {

  componentDidMount(){
    if(this.props.albums.length === 0) this.props.loadAlbums();
    
  }

  render() {
    const { albums } = this.props;
    console.log('^^^^why do you run so much?', albums);

    return (
      <div>
        <h1>Albums</h1>
        <ul>

          { albums.map(album => {
            return <Album key={album.id} {...album}/>;
            {console.log('RRRRRRRRRRRRRRRRRRRRRDO ', album.id)}
          })}

        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: state.album }),
  { loadAlbums }
)(Albums);

