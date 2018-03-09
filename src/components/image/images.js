//top level component
//will encompass both image form and image
//will map ober images to render them
//will pass in props to image form's onComplete

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages, loadAlbums } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';
import { getAllAlbums } from '../../services/galleryApi';

class Images extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.props.loadImages(this.props.id);
    console.log(this.props.id);

  }


  render() {
    const { images, image, addImage, loading, id } = this.props;
    console.log('IMAGES', images);

    return (

      //put if id i smine then display here
      <div className="container"> 
        <ImageForm onComplete={addImage}/>
        
        <section className="grid">
          <ul>
            {images.images &&
          images.images.map(image => <Image albumId={this.props.id} key={image.id} {...image}/>)}
          </ul>
        </section>


      </div>
    );
  }
}

export default connect(
  (state, props) => ({ 
    images: state.images,
    albums: state.album,
    id: props.match.params.id }),
  { addImage, loadImages, loadAlbums }
)(Images);

// images: state.images
//fist line what i want from the store