import { combineReducers } from 'redux';
import MechanicReducer from './MechanicReducer'
import reducer from './reducer'
import UserReducer from './UserReducer'
export default combineReducers({
    MechanicReducer,
    reducer,
    UserReducer
    
  });