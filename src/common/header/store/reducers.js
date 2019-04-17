import * as constants from './constants'
import {fromJS} from 'immutable'
//变成immutable类型
const defaultState = fromJS({
  focusFlag: false,
  mouseFlag: false,
  pageNum:1,
  totalSize:0,
  hotList:[]
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS :
      return state.set("focusFlag", true);
    case constants.SEARCH_BLUR :
      return state.set("focusFlag", false);
    case constants.SEARCH_ENTER :
      return state.set("mouseFlag", true);
    case constants.SEARCH_LEAVE :
      return state.set("mouseFlag", false);
    case constants.GET_HOT :
      return state.merge({
        hotList: action.data,
        totalSize:action.total
      });
    case constants.CHANGE_PAGE :
      return state.set("pageNum",action.num);
    default:
      return state
  }
};
