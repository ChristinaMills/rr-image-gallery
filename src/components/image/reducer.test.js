import  { album, images, ALBUM_LOAD, IMAGE_ADD, IMAGE_REMOVE, IMAGE_LOAD } from './reducers';

const imageToAdd = { id: 123, title: 'My Life', url: 'none.jpg', album: 1, description: 'moody' };

const testAlbum = { name: 'testAlbum', images: [imageToAdd] };

it('loads images', () => {
  const imagesToLoad = [
    imageToAdd,
    { id: 456, title: 'My Life Again', url: 'none2.jpg', album: 2, description: 'moodier' },
  ];

  const state = images([], { type: IMAGE_LOAD, payload: imagesToLoad });
  expect(state).toEqual(imagesToLoad);
});

it('adds an image', () => {
  const state = images({ images:[] }, { type: IMAGE_ADD, payload: imageToAdd });
  expect(state.images).toEqual([imageToAdd]);
});

it('removes an image', () => {
  const state = images(testAlbum, { type: IMAGE_REMOVE, payload: 123 });
  expect(state.images).toEqual([]);
});

it('defaults to empty array', () => {
  const state = images(undefined, {});
  expect(state).toEqual([]);
});

it('loads albums', () => {
  const state = album([], { type: ALBUM_LOAD, payload: [] });
  expect(state).toEqual([]);
});