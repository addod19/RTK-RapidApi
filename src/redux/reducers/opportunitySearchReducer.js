const initialState = {
  generalSearchUser: [],
};

const opportunitySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GENERAL_USER_OPPORTUNITIES':
      return {
        ...state,
        generalSearchUser: action.generalSearchUser,
      };
    default:
      return state;
  }
};

export default opportunitySearchReducer;
