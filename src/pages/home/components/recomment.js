import React, { Component } from 'react'
import { RecommentWrap,RecommentItem } from '../style'
import {connect} from "react-redux";
class Recomment extends Component{
  render() {
    const list = this.props.recommendList
    return (
        <RecommentWrap>
          {
            list.map(item => {
              return (
                <RecommentItem imgUrl={item.get("imgUrl")} key={item.get("id")}/>
              )
            })
          }
        </RecommentWrap>
    )
  }
}
const mapState = (state) => {
  return {
    recommendList: state.getIn(["home","recommendList"])
  }
};
export default connect(mapState,null)(Recomment)
