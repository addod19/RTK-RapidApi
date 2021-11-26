const initialState = {
  search_person: [],
};

const peopleSearchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_GENERAL_USER':
      return {
        ...state,
        search_person: action.search_person,
      }
    default:
      return state;
  }
};

export default peopleSearchReducer;
