//top level component
//will encompass both image form and image
//will map ober images to render them
//will pass in props to image form's onComplete

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';


class Images extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.props.loadImages();
  }



  render() {
    const { images, addImage } = this.props;

    return (
      <div> 
        <ImageForm onComplete={addImage}/>

        <ul className="images">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { addImage, loadImages })
(Images);