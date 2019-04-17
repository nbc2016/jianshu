import React, {Component} from 'react'
import {ArticleWrap} from '../style'
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class Article extends Component {
  render() {
    const list = this.props.articleList
    return (
        <ArticleWrap>
          {
            list.map((item, index) => {
              return (
                  <Link to={'/detail/' + index} key={index}>
                    <li className="clearfix">
                      <div className='left'>
                        <p>{item.get("title")}</p>
                        <p>{item.get("desc")}</p>
                      </div>
                      <img src={item.get("imgUrl")} alt=""/>
                    </li>
                  </Link>
              )
            })
          }

        </ArticleWrap>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"])
  }
};
export default connect(mapState, null)(Article)
