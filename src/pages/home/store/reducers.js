import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  pageNum:0,
  buttonFlag: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME_LIST :
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList),
      });
    case constants.GET_MORE :
      let list = state.get("articleList").toJS().concat(action.data);
      return state.merge({
        pageNum: state.get("pageNum") + 1,
        articleList: fromJS(list),
      });
    case constants.BUTTON_SHOW :
      return state.set("buttonFlag", action.flag);
    default:
      return state
  }
};
