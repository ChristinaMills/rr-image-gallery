export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';
export const IMAGE_LOAD = 'IMAGE_LOAD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const APPLY_FILTER = 'APPLY_FILTER';
import { createSelector } from 'reselect';


export function images(state = [], { type, payload }) {


  switch(type) {   
    case IMAGE_LOAD:
      return payload;
    case IMAGE_ADD:
      return {
        ...state, 
        images: [...state.images, payload]
      };
    case IMAGE_REMOVE:
      return {
        ...state,
        images: state.images.filter(image => image.id !== payload)
      };
            
    default: 
      return state;
  }
}

export function album(state = [], { type, payload }){
  switch(type){
    case ALBUM_LOAD:
      return [
        ...state,
        ...payload
      ];
    default:
      return state;
  }
}

const filterSelector = state => state.filter;
const imageSelector = state => state.image;


export const filterImageSelector = createSelector(
  [filterSelector, imageSelector],
  (filter, images => {
    if(!filter) return images;
    return images.filter(image => image.title.includes(filter) || image.description.includes(filter));
  })
);

export function filter(state = '', { type, payload }) {
  switch(type){
    case APPLY_FILTER:
      return payload;
    case IMAGE_LOAD:
      return '';
    default:
      return state;
  }
}


