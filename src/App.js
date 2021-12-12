import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import Order from './Order';
 

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will  onlyrun once when the app compenents loads
    auth.onAuthStateChanged(authUser => {
      console.log('this is user', authUser);
      
      if (authUser) {
        // the user just logged in OR user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
             <Payment />
          </Route>
          <Route path="/order">
            <Header />
             <Order />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
