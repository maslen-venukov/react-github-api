import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Repo from '../components/Repo';
import Search from '../components/Search';
import Pages from '../components/Pages';

import { getRepos } from '../redux/actions/repos';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(({ repos }) => repos.items);
  const isFetching = useSelector(({ repos }) => repos.isFetching);
  const search = useSelector(({ repos }) => repos.search);
  const currentPage = useSelector(({ repos }) => repos.currentPage);

  useEffect(() => {
    dispatch(getRepos(search, currentPage));
  }, [dispatch, search, currentPage]);

  return (
    <main className="main">
      <div className="container">
        <Search />
        {isFetching
          ? <i className="fetching" />
          : repos.map(repo => <Repo key={repo.id} {...repo} />)}
          <Pages />
      </div>
    </main>
  );
};

export default Main;