import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
  requestStatus: 'idle',
  data: []
});

export default function (state = defaultState, action) {
  return state;
};