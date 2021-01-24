import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setSearch } from '../redux/actions/repos';

const Search = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    inputValue.trim()
      ? dispatch(setSearch(inputValue))
      : dispatch(setSearch('stars:%3E1'));
  };

  const onInputChange = e => setInputValue(e.target.value);

  const onBtnClick = () => inputRef.current.focus();

  return (
    <form onSubmit={onFormSubmit} className="search">
      <input ref={inputRef} value={inputValue} onChange={onInputChange} type="text" className="search__input" />
      <button onClick={onBtnClick} className="search__btn btn">Найти</button>
    </form>
  );
};

export default Search;