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
    error
  }
}


export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('loginInfo')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const auth = (username, password) => {
  return async dispatch => {
    dispatch(authStart())
    const authData = {
      username,
      password
    }
    try {
      const res = await axios.post('/user/login', authData)
      if(res) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('loginInfo', res.data.loginUser)
        dispatch(authSuccess(res.data.token, res.data.loginUser))
      }
    } catch(error) {
      dispatch(authFail(error.response.data))
    }
  }
}
