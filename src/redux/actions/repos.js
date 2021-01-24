import axios from 'axios';

export const setFetching = payload => ({
  type: 'SET_FETCHING',
  payload
});

export const setRepos = payload => ({
  type: 'SET_REPOS',
  payload
});

export const setCurrentPage = payload => ({
  type: 'SET_CURRENT_PAGE',
  payload
});

export const setSearch = payload => ({
  type: 'SET_SEARCH',
  payload
});

export const getRepos = (search = 'stars:%3E1', page = 1) => dispatch => {
  dispatch(setFetching(true));
  axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=10&page=${page}`)
    .then(({ data }) => {
      dispatch(setRepos(data));
      dispatch(setFetching(false));
    })
    .catch(err => console.log(err));
};

export const getCurrentRepo = (username, reponame, setRepo) => {
  axios.get(`https://api.github.com/repos/${username}/${reponame}`)
    .then(({ data }) => setRepo(data))
    .catch(err => console.log(err));
};