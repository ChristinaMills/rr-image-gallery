import { ALBUM_LOAD, IMAGE_ADD, IMAGE_REMOVE, IMAGE_LOAD, APPLY_FILTER } from './reducers';
import galleryApi from '../../services/galleryApi';


const album = '5a9f614c56745c0021e1b928';

export function loadImages(albumId) {
  return {
    type: IMAGE_LOAD,
    payload: galleryApi.load(albumId)
  };
}
export function addImage(image) {
  image.album = album;
  return {
    type: IMAGE_ADD,
    payload: galleryApi.add(image)
  };
}

export function removeImage(id) {
  return {
    type: IMAGE_REMOVE,
    payload: galleryApi.remove(id).then(() => id)
  };
}

export function loadAlbums() {
  return {
    type: ALBUM_LOAD,
    payload: galleryApi.getAllAlbums()
  };
}

export function applyFilter(filter){
  return {
    type: APPLY_FILTER,
    payload: filter
  };
}

