import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import ListHero from './components/ListHero';
import Navbar from './components/navbar';
import Personagem from './components/Search.js'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={ListHero}/>
            <Route path="/search" component={Personagem}/>
          </Switch>
        </main>
      </div>

    );
  }
}
