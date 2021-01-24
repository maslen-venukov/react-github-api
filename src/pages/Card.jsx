import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCurrentRepo } from '../redux/actions/repos';

const Card = ({ history }) => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState(null);

  console.log(username, reponame);

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
  }, [username, reponame]);

  console.log(repo);

  return (
    <div className="container">
      <button onClick={() => history.goBack()} className="back-btn btn">Назад</button>
      {repo ? (
          <div className="card">
            <div className="card__info">
              <p className="card__login"><b>Имя пользователя:</b> {repo.owner.login} <a href={repo.owner.html_url} target="_blank" rel="noreferrer">{repo.owner.html_url}</a></p>
              <p className="card__name"><b>Название репозитория:</b> {repo.name} <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.html_url}</a></p>
              <p className="card__watchers"><b>Отслеживают:</b> {repo.watchers_count}</p>
              <p className="card__stars"><b>Звезды:</b> {repo.stargazers_count}</p>
              <p className="card__forks"><b>Форки:</b> {repo.forks}</p>
              <p className="card__created-date"><b>Дата создания:</b> {repo.created_at.replace(repo.created_at.slice(-10), '')}</p>
              <p className="card__homepage"><b>Официальный сайт:</b> {repo.homepage === '' ? '—' :  <a href={repo.homepage} target="_blank" rel="noreferrer">{repo.homepage}</a>}</p>
              <p className="card__descr"><b>Описание:</b> {repo.description}</p>
            </div>
            <a href={repo.owner.avatar_url} target="_blank" rel="noreferrer"className="card__photo">
              <img src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`} />
            </a>
          </div>
        ) : <i className="fetching" />}
    </div>
  );
};

export default Card;