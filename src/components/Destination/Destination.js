import React, { useContext } from "react";
import "./Destination.css";
import { UserContext } from "../../App";
import HeaderInner from "../HeaderInner/HeaderInner";

const Destination = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <div className="last-header-border">
        <HeaderInner />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5 bg-light mt-4">
            <ul className="location-info">
              <li>{loggedInUser?.location?.[0]}</li>
              <li>{loggedInUser?.location?.[1]}</li>
            </ul>
            <ul className="tickets-info p-3">
              <li>
                <div>
                  <img src={loggedInUser?.img?.[1]} alt="" /> &nbsp; &nbsp;
                  Ticket1{" "}
                </div>
                <div>$67</div>
              </li>
              <li>
                <div>
                  <img src={loggedInUser?.img?.[1]} alt="" /> &nbsp; &nbsp;
                  Ticket2{" "}
                </div>
                <div>$67</div>
              </li>
              <li>
                <div>
                  <img src={loggedInUser?.img?.[1]} alt="" /> &nbsp; &nbsp;
                  Ticket3{" "}
                </div>
                <div>$67</div>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 mt-4 ps-5">
            <img
              className="img-fluid w-100"
              src={loggedInUser?.img?.[0]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
