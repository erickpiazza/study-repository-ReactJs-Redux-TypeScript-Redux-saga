
export const LOAD_SUCCESS_ACTION = 'LOAD_SUCCESS_ACTION';
export const LOAD_REQUEST_ACTION = 'LOAD_REQUEST_ACTION';
export const LOAD_FAILURE_ACTION = 'LOAD_REQUEST_ACTION';

export interface LoadRequestAction {
type:typeof LOAD_REQUEST_ACTION;
}
export interface LoadSuccesstAction {
type: typeof LOAD_SUCCESS_ACTION;
payload: {data:Repository[]}
}
export interface LoadFailuretAction {
type:typeof LOAD_FAILURE_ACTION;
}


export interface Repository{
  id:number
  name:string
}

export interface RepositoriesState{
readonly data: Repository[]
readonly loading: boolean
readonly error:boolean
}

export type RepositoryctionTypes =
 | LoadRequestAction
 |LoadSuccesstAction
 |LoadFailuretAction
