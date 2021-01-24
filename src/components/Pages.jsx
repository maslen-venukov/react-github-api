import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../redux/actions/repos';

import createPages from '../utils/createPages';

const Pages = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(({ repos }) => repos.currentPage);
  const totalCount = useSelector(({ repos }) => repos.totalCount);
  const perPage = useSelector(({ repos }) => repos.perPage);

  const pagesCount = Math.ceil(totalCount / perPage);

  const pages = [];

  createPages(pages, pagesCount, currentPage);

  const onItemClick = page => dispatch(setCurrentPage(page));

  return (
    <nav className="pages">
      <ul>
        {pages.map((page, index) => <li key={index} onClick={() => onItemClick(page)} className={currentPage === page ? 'current' : ''}>{page}</li>)}
      </ul>
    </nav>
  );
};

export default Pages;