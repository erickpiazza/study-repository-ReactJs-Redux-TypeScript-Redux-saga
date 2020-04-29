export enum RepositoriesTypes{
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_SUCCESS'
}

export interface LoadRequestAction {
  type: typeof RepositoriesTypes.LOAD_REQUEST;
 }
export interface LoadSuccesstAction {
  type: typeof RepositoriesTypes.LOAD_SUCCESS;
  payload: {data:Repository[]}
 }
export interface LoadFailuretAction {
  type: typeof RepositoriesTypes.LOAD_FAILURE;
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
