import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './repositories/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState{
    repositories: RepositoriesState
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
