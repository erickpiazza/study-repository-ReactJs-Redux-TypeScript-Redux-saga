import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { ApplicationState } from '../../store/store';

import { LOAD_REQUEST_ACTION } from '../../store/repositories/types';
import RepositoryItem from './repositoryItem';

export default function RepositoryList() {
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
      <button type="button" onClick={conectRepository}> connecteeee repository</button>
    </div>

  );
}
