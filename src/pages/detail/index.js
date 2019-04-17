import React, {Component} from 'react'
import {DetailWrapper} from './style'
import {connect} from "react-redux"
import * as actionCreator from './store/actionCreator'
import {withRouter} from 'react-router-dom'

class Detail extends Component {
  render() {
    //这里面有路由信息
    console.log(this.props);
    const {title, content} = this.props
    return (
        <DetailWrapper>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{__html: content}}/>
        </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail()
  }
}

const mapState = (props) => {
  return {
    title: props.getIn(["detail", "title"]),
    content: props.getIn(["detail", "content"]),
  }
};

const mapDispatch = (dispatch) => {
  return {
    getDetail() {
      dispatch(actionCreator.getDetail())
    }
  }
};
export default connect(mapState, mapDispatch)(withRouter(Detail))
