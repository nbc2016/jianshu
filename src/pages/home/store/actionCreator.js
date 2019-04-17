import * as constants from './constants'
import axios from 'axios'

const getHomeList = (data) => {
  return {
    type: constants.GET_HOME_LIST,
    data
  }
};


export const axiosHome = () => {
  return (dispatch) => {
    axios.get("/api/jshome.json").then((res)=>{
      dispatch(getHomeList(res.data.data))
    })
  }
}

const getMore = (data) => {
  return {
    type: constants.GET_MORE,
    data
  }
};

export const axiosMore = (pageNum) => {
  return (dispatch) => {
    axios.get("/api/jshomeList.json").then((res)=>{
      dispatch(getMore(res.data.data))
    })
  }
}

export const showButton  = (flag) => {
  return {
    type: constants.BUTTON_SHOW,
    flag
  }
}
