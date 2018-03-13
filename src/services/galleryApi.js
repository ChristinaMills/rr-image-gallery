// const albumId = '5a9f614c56745c0021e1b928';
const URL = 'https://image-gallery-server.herokuapp.com/api';

const doFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      if(response.ok) return response.json();

      return response.json().then(body => {
        if(body.message) throw body.message;
        if(body.error) throw body.error;
        throw body;
      });
    });
};

function load(albumId) {
  return doFetch(`${URL}/albums/${albumId}`);
}

function add(image) {
  return doFetch(`${URL}/images`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'content-type': 'application/json'
    }
  });
}

function getAllAlbums() {
  return doFetch(`${URL}/albums`);
}

function remove(id) {
  return doFetch(`${URL}/images/${id}`, {
    method: 'DELETE'
  });
}




export default {
  add,
  getAllAlbums,
  load,
  remove
};