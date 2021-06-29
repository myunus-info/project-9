import "./App.css";
import Login from "./components/Login/Login";
import Tickets from "./components/Tickets/Tickets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import Booking from "./components/Booking/Booking";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Destination from "./components/Destination/Destination";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Tickets />
          </Route>
          <Route exact path="/">
            <Tickets />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/booking">
            <Booking />
          </PrivateRoute>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
