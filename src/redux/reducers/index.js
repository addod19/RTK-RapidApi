import { combineReducers } from "redux";
import userReducer from './userReducer';
import opportunityReducer from './opportunityReducer';
import opportunitySearchReducer from './opportunitySearchReducer';
import peopleSearchReducer from './peopleSearchReducer';

const rootReducer = combineReducers({
  userReducer,
  opportunityReducer,
  opportunitySearchReducer,
  peopleSearchReducer
});

export default rootReducer;