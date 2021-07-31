import {SET_LOADING} from './constant';

const initialState = {
  loading: false,
};

export default reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};
