const initialState = {
  searchPerson: [],
};

const peopleSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GENERAL_USER':
      return {
        ...state,
        searchPerson: action.searchPerson,
      };
    default:
      return state;
  }
};

export default peopleSearchReducer;
