import { Reducer } from 'redux';
import {
  RepositoriesState, RepositoryctionTypes,
  LOAD_FAILURE_ACTION, LOAD_REQUEST_ACTION,
  LOAD_SUCCESS_ACTION,
} from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE,
  action: RepositoryctionTypes) => {
  switch (action.type) {
    case LOAD_REQUEST_ACTION:
      return { ...state, loading: true };
    case LOAD_SUCCESS_ACTION:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case LOAD_FAILURE_ACTION:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
