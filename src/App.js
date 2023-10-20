import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import "./Home.css"
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';


const promise = loadStripe('pk_test_51NRzslSBfouE6onySD76nSkzA1njw6C4qwF3o3mwVQMsz0HRc6RhhTqiGt2wcbBmeKHwTS86pjoY4zcoiaGoPhRN00zgcrGN8C');


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will run ince when app comp loads

    auth.onAuthStateChanged(autFhUser => {
      console.log("The user is >>> ", autFhUser);

      if (autFhUser) {
        //logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: autFhUser
        })

      } else {
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={
            <>
              <Header />
              <Orders />
            </>
          } />
          <Route path="/payment" element={<>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </>} />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;