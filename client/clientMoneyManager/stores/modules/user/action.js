import * as types from './constant';

export const doRegister = datas => {
  fetch(`http://localhost:8080/api/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(datas),
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: types.REGISTER,
        response,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const doLogin = datas => {
  fetch(`http://localhost:8080/api/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(datas),
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: types.LOGIN,
        response,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const doLogout = () => {
  return {
    type: types.LOGOUT,
    response,
  };
};
