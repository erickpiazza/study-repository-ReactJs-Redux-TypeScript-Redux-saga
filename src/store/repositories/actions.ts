
import { RepositoriesTypes, Repository, RepositoryctionTypes } from './types';


export function LoadSuccesstAction(data:Repository[]): RepositoryctionTypes {
  return {
    type: RepositoriesTypes.LOAD_SUCCESS,
    payload: { data },
  };
}
export function LoadFailuretAction(): RepositoryctionTypes {
  return {
    type: RepositoriesTypes.LOAD_FAILURE,
  };
}

export function loadRequestAction(): RepositoryctionTypes {
  return {
    type: RepositoriesTypes.LOAD_REQUEST,
  };
}
