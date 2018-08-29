import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import incidents from './reducers/incidents';
import { endianness } from 'os';

const middleware = applyMiddleware(thunk);
const enhancer = (process.env.NODE_ENV === 'production') ? middleware : compose(middleware);

const rootReducer = combineReducers({
  incidents
});

export default createStore(rootReducer, enhancer);