import * as types from './constant';

export const loading = (yes = true) => {
  //
  return {
    type: types.SET_LOADING,
    payload: yes,
  };
};
