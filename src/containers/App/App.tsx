import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import City from "../City";

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
            <City name="Moscow" />
          </Route>
          <Route path="/saint-peterburg">
            <City name="Saint-peterburg" />
          </Route>
          <Route path="/rostov-na-dony">
            <City name="Rostov-na-dony" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// function City({ currentCity }: any) {
//   console.log("name", currentCity);
//   return <p>{currentCity}</p>;
// }

// class City extends React.Component<CityProps, {}> {
//   // constructor(props: City) {
//   //   super(props);
//   // }
//   constructor(props: CityProps) {
//     super(props);
//   }
//   render() {
//     return <p>{this.props.name}</p>;
//   }
// }

// interface CityProps {
//   name: string;
// }

export default App;
