const initialState = {
  opportunities: [],
};

const opportunitySearchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_GENERAL_USER_OPPORTUNITIES':
      return {
        ...state,
        opportunities: action.opportunities,
      }
    default:
      return state;
  }
};

export default opportunitySearchReducer;
