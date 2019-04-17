import * as constants from './constants'
import axios from 'axios'

const changeDetail = (data) => {
  return {
    type: constants.CHANGE_DETAIL,
    data
  }
};

export const getDetail = () => {
  return (dispatch) => {
    axios.get("/api/jsdetail.json").then((res)=>{
      dispatch(changeDetail(res.data.data))
    })
  }
};
