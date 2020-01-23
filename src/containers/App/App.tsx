import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import City from '../City';
import CityList from '../CityList';

import Toggle from '../../components/Toggle';

import { ThemeContext, themes } from '../ThemedContext/ThemeContext';

const App: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const [theme, setTheme] = useState(themeContext);
    const themeMode = theme === 'light' ? 'dark' : 'light';
    const toggleTheme = () => {
        console.log('theme mode', themeMode);
        // if (themeMode === 'light') themeMode = 'dark';
        // if (themeMode === 'light') themeMode = 'dark';
        // themeMode =
        setTheme(themeMode);
    };
    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
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
                            <Toggle theme={themeMode} toggleTheme={() => toggleTheme()} />
                            <CityList />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
};

export default App;
