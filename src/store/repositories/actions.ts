import {
  Repository, RepositoryctionTypes, LOAD_SUCCESS_ACTION, LOAD_FAILURE_ACTION, LOAD_REQUEST_ACTION,
} from './types';


export function LoadSuccesstAction(data:Repository[]): RepositoryctionTypes {
  return {
    type: LOAD_SUCCESS_ACTION,
    payload: { data },
  };
}
export function LoadFailuretAction(): RepositoryctionTypes {
  return {
    type: LOAD_FAILURE_ACTION,
  };
}

export function loadRequestAction(): RepositoryctionTypes {
  return {
    type: LOAD_REQUEST_ACTION,
  };
}
