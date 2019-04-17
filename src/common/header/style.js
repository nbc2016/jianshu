import styled from 'styled-components'
import logoImg from '../../static/logo.png'
//这种组件有vue的非props特性
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
  text-align: center;
`;

export const Logo = styled.h1`
  float: left;
  height: 100%;  
  width: 100px;
  background: url(${logoImg}) no-repeat center center/ 100% 100%;
`;

export const MainWrap = styled.div`
  float: left;
  width: 870px;
  margin-left: 130px;
  height: 100%;
`;
export const Index = styled.a.attrs({
  href: '#'
})`
  color: #ea6f5a;
  float: left;
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
`;

export const Download = styled.a.attrs({
  href: '#'
})`
  color: #000;
  float: left;
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
  &:hover {
    background-color:#f5f5f5;
  }
`;

export const SearchBox = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 9px;
  height: 38px;
  padding: 0 40px 0 20px;
  background-color:#f5f5f5;
  border-radius: 19px;
  position: relative;
  &.focus>a {
    background-color: #969696;
  }
  &.focus>input {
    width: 160px;
  }
  .show {
    display: block;
  }
`;

export const Input = styled.input`
  width: 100px;
  line-height: 38px;
  font-size: 14px;
  transition: all .5s ease-in;
  background-color:transparent;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
`;
export const SearchIcon = styled.a.attrs({
  href: '#'
})`
  position: absolute;
  top: 4px;
  padding: 0 !important;
  cursor: pointer;
  right: 6px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
`;
export const HotBox = styled.div`
  left: 0;
  color: #969696;
  top: 58px;
  display: none;
  font-size: 14px;
  width: 210px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  position: absolute;
  background-color:#fff;
  a {
    color: #969696;
  }
  a:hover {
    color: black;
  }
`;
export const HeaderBox = styled.div`
`;
export const HotText = styled.span`
  float: left;
`;
export const Xuan = styled.i`
  transition: all .9s;
  display: inline-block;
  width: 15px;
  text-align: center;
  line-height: 18px;
`;
export const Huan = styled.a.attrs({
  href: '#'
})`
  float: right;
`;

export const ListBox = styled.ul`
  margin-top: 20px;
`;

export const ListItem = styled.li`
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ListA = styled.a.attrs({
  href: '#'
})`
  display: block;
  padding: 2px 6px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;


export const Login = styled.span`
  float: right;
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
`;

export const Aa = styled.a.attrs({
  href: '#'
})`
  float: right;
  line-height: 26px;
  padding: 15px;
  font-size: 21px !important;
`;

export const Register = styled.a.attrs({
  href: '#'
})`
  float: left;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 35px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color:transparent;
  &:hover {
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
`;

export const Wirte = styled.span`
    float: right;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 8px 15px 0 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  &:hover {
    color: #fff;
    background-color: #ec6149;
  }
`;
