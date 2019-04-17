import React, {Component} from 'react'
import {LoginWrapper} from './style'
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import * as actionCreator from './store/actionCreator'

class Login extends Component {
  render() {
    if (!this.props.loginState) {
      return (
          <LoginWrapper>
            用户名: <input type="text" ref={(username) => {
            this.username = username
          }}/> <br/>
            密　码: <input type="password" ref={(password) => {
            this.password = password
          }}/> <br/>
            <button onClick={() => {
              this.props.login(this.username.value,this.password.value)
            }}>登录
            </button>
          </LoginWrapper>
      )
    }else {
      return <Redirect to="/" />
    }

  }

}
const mapState = (props) => {
  return {
    loginState: props.getIn(["login","loginState"])
  }
};

const mapDispatch = (dispatch) => {
  return {
    login(username, password) {
      dispatch(actionCreator.changeLogin(username, password))
    }
  }
};
export default connect(mapState, mapDispatch)(Login)
