import axios from '../../axios-api'

import * as actionTypes from './actionTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, login) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    loginInfo: {
      username: login.username,
      name: login.name
    }
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}


export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const auth = (values) => {
  return async dispatch => {
    dispatch(authStart())
    try {
      const res = await axios.post('/user/login', values)
      if(res) {
        dispatch(authSuccess(res.data.token, res.data.loginUser))
      }
    } catch(error) {
      console.log('ERR', error.response.data)
      dispatch(authFail(error.response.data))
    }
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    const loginInfo = localStorage.getItem('loginInfo')
    if(!token) dispatch(logout())
    else dispatch(authSuccess(token, loginInfo))
  }
}
