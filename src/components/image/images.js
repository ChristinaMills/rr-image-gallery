//top level component
//will encompass both image form and image
//will map ober images to render them
//will pass in props to image form's onComplete

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages, loadAlbums } from './actions';
import Filter from './Filter';
import { filterImageSelector } from './reducers';
import Image from './Image';
import ImageForm from './ImageForm';
import { getAllAlbums } from '../../services/galleryApi';

class Images extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.props.loadImages(this.props.id);
    console.log('i think this is id', this.props.id);
    

  }


  render() {
    const { images, image, addImage, loading, id } = this.props;
    console.log('IMAGES', images);

    return (

      //put if id i smine then display here
      <div>
        <section>
          {(this.props.id === '5a9f614c56745c0021e1b928')
            ?
            <div id="add-image">
              <ImageForm onComplete={addImage}/>
            </div>
            :
            null

          }
        </section>
        <div id="filter">
        Filter: <Filter/>
        </div>
        <section className="grid">
          <ul>
            {images.images &&
          images.images.map((image, i) => <Image key={i} {...image} albumId={this.props.id}/>)}
          </ul>
        </section>



      </div>
    );
  }
}

// export default connect(
//   (state, props) => ({ 
//     images: state.images,
//     albums: state.album,
//     id: props.match.params.id }),
//   { addImage, loadImages, loadAlbums }
// )(Images);

export default connect(
  state => ({ images: filterImageSelector(state) }), 
  { addImage, loadImages }
)(Images);

// selector deals with entire state automagically

// images: state.images
//fist line what i want from the store