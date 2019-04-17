import * as constants from './constants'
import axios from 'axios'

const login = (flag) => {
  return {
    type: constants.CHANGE_LOGIN,
    flag
  }
};
export const loginout = () => {
  return {
    type: constants.CHANGE_LOGIN,
    flag:false
  }
};

export const changeLogin = (username,password) => {
  return (dispatch) => {
    axios.get("/api/jslogin.json").then((res)=>{
      if (username === "nbc" && password === "123456") {
        dispatch(login(true))
      }else {
        dispatch(login(false));
        alert("用户名或密码错误")
      }
    })
  }
};
