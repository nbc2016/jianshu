import React, { Component } from 'react'
import { TopicWrap } from '../style'
import { connect } from 'react-redux'
class Topic extends Component{
  render() {
    const list = this.props.topicList
    return (
        <TopicWrap className="clearfix">
          {
            list.map(item => {
              return (
                  <li key={item.get("id")}>
                    <img src={item.get("imgUrl")} alt="" className="top-pic"/>
                    {item.get("title")}
                  </li>
              )
            })
          }
        </TopicWrap>
    )
  }
}
const mapState = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"]),
  }
};
//这个connect自己封装了pure优化,所有上面不用使用PureComponent
export default connect(mapState,null)(Topic)
