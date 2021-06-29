import React, { useState } from "react";
import "./Booking.css";
import HeaderInner from "../HeaderInner/HeaderInner";
import map from "../../img/map.png";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const [places, setPlaces] = useState({ from: "", to: "", showMap: false });
  const history = useHistory();
  const goToDestination = () => {
    history.push("/destination");
  };

  const handleBlur = (e) => {
    let isLocationValid;
    if (e.target.name === "from") {
      const from = e.target.value;
      isLocationValid = from;
    }
    if (e.target.name === "to") {
      const to = e.target.value;
      isLocationValid = to;
    }
    if (isLocationValid) {
      const placesInfo = { ...places };
      placesInfo[e.target.name] = e.target.value;
      setPlaces(placesInfo);
    }
    if (!isLocationValid) {
      const placesInfo = { ...places };
      placesInfo[e.target.name] = e.target.value;
      setPlaces(placesInfo);
    }
  };

  const handleShowMap = () => {
    if (places.from && places.to) {
      document
        .querySelector(".show-map")
        .querySelector("img")
        .setAttribute("src", map);
      document.getElementById("search-location").textContent = "";
      const placesInfo = { ...places };
      placesInfo.showMap = true;
      setPlaces(placesInfo);
    } else {
      document
        .querySelector(".show-map")
        .querySelector("img")
        .removeAttribute("src");
      document.getElementById("search-location").classList.remove("d-none");
    }
  };

  return (
    <div>
      <div className="header-border">
        <HeaderInner />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="bookigForm">
              <form action="">
                <label htmlFor="from">Pick From</label>
                <input
                  onBlur={handleBlur}
                  className="form-control input-field"
                  type="text"
                  name="from"
                />
                <label htmlFor="to">Pick To</label>
                <input
                  onBlur={handleBlur}
                  className="form-control"
                  type="text"
                  name="to"
                />
                {places.showMap ? (
                  <div className="d-grid">
                    <button
                      onClick={goToDestination}
                      className="btn bg-color"
                      type="button"
                    >
                      Proceed Next
                    </button>
                  </div>
                ) : (
                  <div className="d-grid">
                    <button
                      onClick={handleShowMap}
                      className="btn bg-color"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="show-map">
              <img className="img-fluid w-100" alt="" />
              <p className="d-none" id="search-location">
                Please Search for correct locations!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
