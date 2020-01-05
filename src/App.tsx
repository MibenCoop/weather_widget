import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul className="menu">
            <li className="routerLink">
              <Link to="/moscow">Moscow</Link>
            </li>
            <li className="routerLink">
              <Link to="/saint-peterburg">Saint-peterburg</Link>
            </li>
            <li className="routerLink">
              <Link to="/rostov-na-dony">Rostov-na-dony</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/moscow">
            <City currentCity="moscow" />
          </Route>
          <Route path="/saint-peterburg">
            <City currentCity="saint-peterburg" />
          </Route>
          <Route path="/rostov-na-dony">
            <City currentCity="mosrostov-na-dony" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

function City({ currentCity }: any) {
  console.log("name", currentCity);
  return <p>{currentCity}</p>;
}

export default App;
