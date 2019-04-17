import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const LeftWrapper = styled.div`
  float: left;
  width: 625px;
  img {
    width: 625px;
    height: 270px;
    border-radius: 10px;
  }
`;

export const RightWrapper = styled.div`
  width: 280px;
  float: right;
`;

export const ArticleWrap = styled.ul`
  margin-top: 30px;
  border-top: 1px solid black;
  a {
    display: block;
    >li {
    border-bottom: 1px solid black;
    padding: 20px 0;
    >.left {
      width: 458px;
      float: left;
      line-height: 30px;
      p:first-child {
        color: darkgrey;
        font-size: 18px;
        font-weight: 500;
      }
      p:last-child {
        color: black;
        font-size: 13px;
      }
    }
    >img {
      float: right;
      width: 150px;
      height: 100px;
    }
  }
  }
`;


export const RecommentWrap = styled.ul`
  border-bottom: 1px solid black;
`;

export const RecommentItem = styled.li`
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${props => props.imgUrl}) no-repeat center center/ 100% 100%;
`;
export const TopicWrap = styled.ul`
  padding: 20px 0  10px;
  margin-left: -18px;
  >li{
    float: left;
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    background-color:#f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .top-pic {
      display: block;
      float: left;
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
`;
export const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 30px;
  cursor: pointer;
  &.hide{
    display: none;
  }
`;
