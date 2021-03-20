import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Not Found/NotFound";
import Navigation from "./Components/Navigation/Navigation";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Destination from "./Components/Destination/Destination";
import About from "./Components/About/About";
export const UserContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]} className="App">
      {/* <h1>Email:{loggedIn.email}</h1> */}
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
