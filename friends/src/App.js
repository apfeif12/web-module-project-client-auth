import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Friends from "./components/Friends.js";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute exact path="/friends" component={Friends} />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
            </div>
            ;
        </Router>
    );
}

export default App;
