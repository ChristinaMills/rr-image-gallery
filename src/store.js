import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { images, album } from './components/image/reducers';
import { loading, error } from './components/app/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';


const reducer = combineReducers({
  album,
  images,
  loading, 
  error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware) 
  )
);

export default store;