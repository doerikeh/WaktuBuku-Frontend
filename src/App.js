import React, { Component } from 'react';
import PrivateRoute from './components/common/PrivateRoute';
import history from './history';

import './assets/main.css';
import Home from "./components/home/Home";
import User from "./components/user/User";
import Categories from './components/Categories/Categories';
import Navbar from "./components/layout/header/Navbar";
import Footer from './components/layout/footer/Footer';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import EditUser from './components/user/layout/EditUser';

import { Provider } from 'react-redux';
import store from './store';
import { Router , Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';




class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }


  render(){
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="">
          <Navbar/>
            <div className="h-screen">
                <Switch>
                      <PrivateRoute exact path="/" component={Home}/>
                      <Route exact path="/user" component={User}></Route>
                      <Route exact path="/register" component={Register}></Route>
                      <Route exact path="/user/edit" component={EditUser}></Route>
                      <Route exact path="/login" component={Login}></Route>
                      <Route exact path="/categories" component={Categories}></Route>
                </Switch>
            
          <Footer/>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
}



export default App;
