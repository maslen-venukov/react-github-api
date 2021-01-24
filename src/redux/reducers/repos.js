const initialState = {
  items: [],
  isFetching: true,
  search: 'stars:%3E1',
  currentPage: 1,
  perPage: 10,
  totalCount: 0
};

const repos = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count
      };

    case 'SET_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      };

    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload
      };

    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };

    default:
      return state;
  };
};

export default repos;