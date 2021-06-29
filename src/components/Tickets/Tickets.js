import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./Tickets.css";

const Tickets = () => {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/booking");
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="banner">
        <div className="container px-lg-0">
          <div className="row common-card">
            <div className="col-lg-6 col-xl-3 ">
              <div className="card1">
                <h2>One Time Ticket</h2>
                <button onClick={goToLogin}>Buy Now</button>
                <h3>&#2547;100</h3>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="card2">
                <h2>One day pass</h2>
                <button onClick={goToLogin}>Buy Now</button>
                <h3>&#2547;500</h3>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="card3">
                <h2>Monthly pass</h2>
                <button onClick={goToLogin}>Buy Now</button>
                <h3>&#2547;1500</h3>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="card4">
                <h2>Annual pass</h2>
                <button onClick={goToLogin}>Buy Now</button>
                <h3>&#2547;9000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
