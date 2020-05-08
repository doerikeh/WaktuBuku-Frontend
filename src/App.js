import React from 'react';
import './assets/main.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import User from "./components/user/User";
import Categories from './components/Categories/Categories';
import Navbar from "./components/header/Navbar";
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="">
      <Navbar/>
        <div className="h-screen">
            <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/user" component={User}></Route>
                  <Route path="/categories" component={Categories}></Route>
            </Switch>
        
      <Footer/>
      </div>
    </div>
    
  );
}

export default App;
