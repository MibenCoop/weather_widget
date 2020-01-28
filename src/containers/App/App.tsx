import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import { Nav } from '../../components/Nav';
import City from '../City';
import CityList from '../CityList';

import Toggle from '../../components/Toggle';

import { ThemeContext, themes } from '../ThemedContext/ThemeContext';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props: any) => (props.theme.mode === 'dark' ? '#111' : '#EEE')};
        color: ${(props: any) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
    }
`;

const App = () => {
    const [theme, setTheme] = useState({ mode: 'dark' });
    console.log('theme', theme.mode);
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <div className="App">
                    <button onClick={e => setTheme(theme.mode === 'light' ? { mode: 'dark' } : { mode: 'light' })}>
                        Toggle theme
                    </button>
                    <CityList />
                </div>
            </>
        </ThemeProvider>
    );
};

// const App: React.FC = () => {
//     // const themeContext = useContext(ThemeContext);
//     const [theme, setTheme] = useState({ mode: 'dark' });
//     // const themeMode = theme === 'light' ? 'dark' : 'light';
//     // const toggleTheme = () => {
//     //     console.log('theme mode', themeMode);
//     //     // if (themeMode === 'light') themeMode = 'dark';
//     //     // if (themeMode === 'light') themeMode = 'dark';
//     //     // themeMode =
//     //     setTheme(themeMode);
//     // };
//     return (
//         <div className="App">
//             <ThemeProvider theme={theme}>
//                 <GlobalStyle />
//                 <BrowserRouter>
//                     <Nav />
//                     <Switch>
//                         <Route path="/moscow">
//                             <City name="Moscow" />
//                         </Route>
//                         <Route path="/saint-peterburg">
//                             <City name="Saint-peterburg" />
//                         </Route>
//                         <Route path="/rostov-na-dony">
//                             <City name="Rostov-na-dony" />
//                         </Route>
//                         <Route exact path="/">
//                             <button
//                                 onClick={() => setTheme(theme.mode === 'light ' ? { mode: 'dark' } : { mode: 'light' })}
//                             >
//                                 Toggle theme
//                             </button>
//                             <CityList />
//                         </Route>
//                     </Switch>
//                 </BrowserRouter>
//             </ThemeProvider>
//         </div>
//     );
// };

export default App;
