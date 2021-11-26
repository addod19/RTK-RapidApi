const initialState = {
  person: {},
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        person: action.person,
      }
    default:
      return state;
  }
};

export default userReducer;
