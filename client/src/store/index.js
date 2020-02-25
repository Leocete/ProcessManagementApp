import { createStore } from 'redux';

export default configureStore = () => {
  const store = createStore(countReducer);
  return store;
};
