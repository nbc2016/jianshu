import { combineReducers } from 'redux-immutable'
import HeaderReducers from '../common/header/store'
import HomeReducers from '../pages/home/store'
import DetailReducers from '../pages/detail/store'
import LoginReducers from '../pages/login/store'

//变成immutable类型
export default combineReducers({
  header: HeaderReducers,
  home: HomeReducers,
  detail: DetailReducers,
  login: LoginReducers
});
