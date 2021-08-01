import {LOGIN, LOGOUT, REGISTER} from './constant';

const initialState = {
  login: {},
  register: {},
  isLogin: false,
};

export default reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, login: action.payload};

    case LOGOUT:
      return {...state, isLogin: action.payload};

    case REGISTER:
      return {...state, register: action.payload};

    default:
      return state;
  }
};
