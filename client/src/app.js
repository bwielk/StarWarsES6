import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Main from './components/main.jsx'
import Home from './components/home.jsx'
import Planets from './components/planets.jsx'
import Starships from './components/starships.jsx'
import Characters from './components/characters.jsx'

window.onload = () => {
  render(
    <Router history = {hashHistory}>
    <Route path = '/' component={Main}>
    <IndexRoute component={Home} />
    <Route path = 'home' component = {Home} />
    <Route path = 'planets' component = {Planets} />
    <Route path = 'starships' component = {Starships} />
    <Route path = 'characters' component = {Characters} />
    </Route>
    </Router>,
    document.getElementById('app')
    );
}
