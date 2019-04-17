import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
  Login,
  Aa,
  HeaderWrapper,
  Logo,
  MainWrap,
  Register,
  Wirte,
  Index,
  Download,
  SearchBox,
  Input,
  SearchIcon,
  HotBox,
  HeaderBox,
  HotText,
  Huan,
  Xuan,
  ListBox,
  ListItem,
  ListA
} from './style'
import {connect} from "react-redux";
import * as actionCreator from './store/actionCreator'
import * as LoginActionCreator from '../../pages/login/store/actionCreator'

class Header extends Component {
  constructor(props){
    super(props);
    this.xuanClick = this.xuanClick.bind(this);
    this.state = {
      num:0
    }
  }
  render() {
    const {focusFlag,mouseFlag,hotList,pageNum,totalSize,loginout,
      focusHandle, blurHandle,mouseEnterHandle,mouseLeaveHandle,loginState} = this.props;
    let currentList = [];
    const hotListTo = hotList.toJS();
    if (hotListTo.length) {
        if (pageNum < totalSize) {
          currentList = hotListTo.slice((pageNum-1)*10,pageNum*10);
        }else {
          currentList = hotListTo.slice((pageNum-1)*10,-1);
        }
    }
    return (
        <HeaderWrapper>
          <Link to='/'>
            <Logo/>
          </Link>
          <MainWrap>
            <Index>首页</Index>
            <Download>下载App</Download>
            <SearchBox
                className={focusFlag ? 'focus' : ''}
            >
              <Input
                  onFocus={()=>{focusHandle(hotList)}}
                  onBlur={blurHandle}
                  placeholder="搜索"/>
              <SearchIcon className="iconfont">&#xe614;</SearchIcon>
              <HotBox
                  className={focusFlag || mouseFlag ? "show" : ""}
                  onMouseEnter={mouseEnterHandle}
                  onMouseLeave={mouseLeaveHandle}>
                <HeaderBox className="clearfix">
                  <HotText>热门搜索</HotText>
                  <Huan onClick={this.xuanClick}>
                    <Xuan className="iconfont"
                          ref={(el) => {this.xuan = el}}
                    >&#xe851;</Xuan>
                    &nbsp;&nbsp;换一换
                  </Huan>
                </HeaderBox>
                <ListBox className="clearfix">
                  {
                    currentList.map((item,index) => {
                      return(
                          <ListItem key={index}>
                            <ListA>{item}</ListA>
                          </ListItem>
                      )
                    })
                  }
                </ListBox>
              </HotBox>
            </SearchBox>
            {
              loginState ?
                  <Login onClick={loginout}>退出</Login> :
                  <Link to='/login'><Login>登录</Login></Link>
            }
            <Aa className="iconfont">&#xe636;</Aa>
          </MainWrap>
          <Register>注册</Register>
          <Link to="/write">
            <Wirte><i className="iconfont">&#xe615;</i>写文章</Wirte>
          </Link>
        </HeaderWrapper>
    )
  }
  xuanClick(){
    let num = this.state.num + 1;
    this.setState({
      num: num
    });
    this.xuan.style.transform = "rotateZ("+(num*360)+"deg)";
    let pagenum = this.props.pageNum;
    pagenum++;
    if (pagenum > this.props.totalSize) {
      pagenum = 1;
    }
    this.props.changeNumHandle(pagenum)
  }

}

const mapStateToProps = (state) => {
  return {
    focusFlag: state.getIn(["header", "focusFlag"]),
    mouseFlag: state.getIn(["header", "mouseFlag"]),
    hotList: state.getIn(["header", "hotList"]),
    pageNum: state.getIn(["header", "pageNum"]),
    totalSize: state.getIn(["header", "totalSize"]),
    loginState: state.getIn(["login","loginState"])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    focusHandle(list) {
      list.size === 0 && dispatch(actionCreator.GetHotList());
      dispatch(actionCreator.SearchFocus());
    },
    blurHandle() {
      dispatch(actionCreator.SearchBlur());
    },
    mouseEnterHandle() {
      dispatch(actionCreator.SearchEnter());
    },
    mouseLeaveHandle() {
      dispatch(actionCreator.SearchLeave());
    },
    changeNumHandle(num) {
      dispatch(actionCreator.ChangePage(num));
    },
    loginout(){
      dispatch(LoginActionCreator.loginout())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header)
