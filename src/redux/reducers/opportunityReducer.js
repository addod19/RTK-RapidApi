const initialState = {
  opportunities: [],
};

const opportunityReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_OPPORTUNITIES':
      return {
        ...state,
        opportunities: action.opportunities,
      }
    default:
      return state;
  }
};

export default opportunityReducer;
