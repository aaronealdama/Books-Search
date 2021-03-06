import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/saved" component={Saved}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;