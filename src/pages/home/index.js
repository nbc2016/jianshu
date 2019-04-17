import React, {Component} from 'react'
import {HomeWrapper, LeftWrapper, RightWrapper, Button} from "./style";
import {connect} from "react-redux"
import Article from "./components/article";
import Topic from "./components/topic";
import Recomment from "./components/recomment";
import * as actionCreator from "./store/actionCreator";

class Home extends Component {
  render() {
    return (
        <HomeWrapper className="clearfix">
          <LeftWrapper>
            <img
                src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                alt=""/>
            <Topic/>
            <Article/>
            <button onClick={this.props.getMore}>获取更多</button>
          </LeftWrapper>
          <RightWrapper>
            <Recomment/>
          </RightWrapper>
          <Button className={this.props.buttonFlag ? "" : "hide"} onClick={this.goTop}>顶部</Button>
        </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeHandle()
    window.addEventListener("scroll", this.props.showButton)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.showButton)
  }

  goTop () {
    let timer = setInterval(()=>{
      let top = window.pageYOffset || document.documentElement.scrollTop
      if (top < 10) {
        window.scrollTo(0,0)
        clearInterval(timer)
      }else{
        window.scrollBy(0,-10)
      }
    },2)
  }
}

const mapState = (state) => {
  return {
    pageNum: state.getIn(["home", "pageNum"]),
    buttonFlag: state.getIn(["home", "buttonFlag"])
  }
};
const mapDispatch = (dispatch) => {
  return {
    getHomeHandle() {
      dispatch(actionCreator.axiosHome());
    },
    getMore() {
      dispatch(actionCreator.axiosMore());
    },
    showButton() {
      let top = window.pageYOffset || document.documentElement.scrollTop
      if (top > 200) {
        dispatch(actionCreator.showButton(true))
      } else {
        dispatch(actionCreator.showButton(false))
      }
    }
  }
};
export default connect(mapState, mapDispatch)(Home)
