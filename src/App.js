import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Header from './common/header'
import {Globalstyle} from './style';
import { BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle/>
        <BrowserRouter>
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
