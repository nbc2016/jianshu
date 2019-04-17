import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'
export const  SearchFocus = () => {
   return{
    type: constants.SEARCH_FOCUS
  }
};
export const  SearchBlur = () => {
  return{
    type: constants.SEARCH_BLUR
  }
};
export const  SearchEnter = () => {
  return{
    type: constants.SEARCH_ENTER
  }
};
export const  SearchLeave = () => {
  return{
    type: constants.SEARCH_LEAVE
  }
};
const  HotList = (data,total) => {
  return{
    type: constants.GET_HOT,
    data,
    total
  }
};
export const  GetHotList = () => {
  return (dispatch) => {
    axios.get("/api/jsheaderList.json").then((res)=>{
      const data = fromJS(res.data.data);
      dispatch(HotList(data,Math.ceil(data.size/10)));
    })
  }
};
export const  ChangePage = (num) => {
  return{
    type: constants.CHANGE_PAGE,
    num
  }
};
