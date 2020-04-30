import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';


import { ApplicationState } from '../../store/store';
import * as RepositoriesActions from '../../store/repositories/actions';
import { LOAD_REQUEST_ACTION } from '../../store/repositories/types';
import RepositoryItem from './repositoryItem';

function RepositoryList() {
  const repositories = useSelector((state :ApplicationState) => state.repositories);
  const dispatch = useDispatch();


  function conectRepository() {
    dispatch({ type: LOAD_REQUEST_ACTION });
  }

  return (
    <div>
      <ul>
        {repositories.data.map((repo, index) => <RepositoryItem key={repo.id} repository={repo} />)}

      </ul>
      <button type="button" onClick={conectRepository}> connect repository</button>
    </div>

  );
}
const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators(RepositoriesActions, dispatch));

export default connect(mapDispatchToProps)(RepositoryList);
