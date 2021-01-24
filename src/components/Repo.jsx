import React from 'react';
import { NavLink } from 'react-router-dom';

const Repo = ({ owner, name, stargazers_count, updated_at, html_url }) => {
  const last_commit = updated_at.replace('T', ' ').replace(updated_at.slice(-4), '');

  return (
    <div className="repo">
      <div className="repo__header">
        <p className="repo__name">
          <NavLink to={`/card/${owner.login}/${name}`} className="repo__link">{name}</NavLink>
        </p>
        <p className="repo__stars">Количество звезд: {stargazers_count}</p>
      </div>
      <div className="repo__body">
        <p className="repo__last-commit">Последний коммит: {last_commit}</p>
        <a href={html_url} target="_blank" rel="noreferrer" className="repo__link">{html_url}</a>
      </div>
    </div>
  );
};

export default Repo;