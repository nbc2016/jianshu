import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Write extends Component {
  render() {
    if (this.props.loginState) {
      return (
          <div>write</div>
      )
    }else {
      return (
          <Redirect to='/login'/>
      )
    }

  }
}

const mapState = (props) => {
  return {
    loginState: props.getIn(["login", "loginState"])
  }
};

export default connect(mapState, null)(Write)
