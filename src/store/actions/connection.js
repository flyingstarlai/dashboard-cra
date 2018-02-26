import axios from '../../axios-api';
import * as actionTypes from './actionTypes';

export const connectionStart = () => ({
  type: actionTypes.CONNECTION_START,
});

export const connectionSuccess = connections => ({
  type: actionTypes.CONNECTION_SUCCESS,
  connections,
});

export const connectionFail = error => ({
  type: actionTypes.CONNECTION_FAIL,
  error,
});

export const connectionListStart = () => ({
  type: actionTypes.CONNECTION_LIST_START,
});

export const connectionListSuccess = connections => ({
  type: actionTypes.CONNECTION_LIST_SUCCESS,
  connections,
});

export const connectionListFail = error => ({
  type: actionTypes.CONNECTION_LIST_FAIL,
  error,
});
export const connectionToggleEdit = () => ({

  type: actionTypes.CONNECTION_TOGGLE_EDIT,
});

export const connectionList = () => async (dispatch) => {
  dispatch(connectionListStart());
  try {
    const res = await axios.get('/repository/connections');
    if (res) {
      dispatch(connectionListSuccess(res.data));
    }
  } catch (error) {
    dispatch(connectionListFail(error.response.data));
  }
};
export const connectionAdd = values => async (dispatch) => {
  dispatch(connectionStart());
  try {
    const res = await axios.post('/repository/connections', values);
    if (res) {
      dispatch(connectionSuccess(res.data));
    }
  } catch (error) {
    dispatch(connectionFail(error.response.data));
  }
};

export const connectionUpdate = values => async (dispatch) => {
  dispatch(connectionStart());
  try {
    const res = await axios.post('repository/connections/update', values);
    if (res) {
      dispatch(connectionSuccess(res.data));
    }
  } catch (error) {
    dispatch(connectionFail(error));
  }
};
