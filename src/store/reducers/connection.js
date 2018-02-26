import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  connections: [],
  isEdit: false,
  submitError: null,
  submitLoading: false,
  listError: null,
  listLoading: false,
};


const connectionStart = (state, action) => updateObject(state, { submitError: null, submitLoading: true });

const connectionSuccess = (state, action) => updateObject(state, {
  connections: action.connections,
  isEdit: false,
  submitError: null,
  submitLoading: false,
});

const connectionFail = (state, action) => updateObject(state, {
  submitError: action.error,
  submitLoading: false,
});

const connectionListStart = (state, action) => updateObject(state, { listError: null, listLoading: true });

const connectionListSuccess = (state, action) => updateObject(state, {
  connections: action.connections,
  isEdit: false,
  listError: null,
  listLoading: false,
});

const connectionListFail = (state, action) => updateObject(state, {
  listError: action.error,
  listLoading: false,
});
const connectionToggleEdit = (state, action) => updateObject(state, { isEdit: !state.isEdit });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONNECTION_START: return connectionStart(state, action);
    case actionTypes.CONNECTION_SUCCESS: return connectionSuccess(state, action);
    case actionTypes.CONNECTION_FAIL: return connectionFail(state, action);
    case actionTypes.CONNECTION_LIST_START: return connectionListStart(state, action);
    case actionTypes.CONNECTION_LIST_SUCCESS: return connectionListSuccess(state, action);
    case actionTypes.CONNECTION_LIST_FAIL: return connectionListFail(state, action);
    case actionTypes.CONNECTION_TOGGLE_EDIT: return connectionToggleEdit(state, action);
    default: return state;
  }
};

export default reducer;
