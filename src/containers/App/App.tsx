import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import City from '../City';
import CityList from '../CityList';

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <ul className="menu">
                        <li className="routerLink">
                            <Link to="/">Cities</Link>
                        </li>
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
                    <Route exact path="/">
                        <CityList />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
