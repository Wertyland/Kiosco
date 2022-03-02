import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import Main from './components/Main';
import Inicio from './components/Home';
import Pagos from './components/Pagos';

import './custom.css'
import Ventas from './components/Ventas';
import BuscarProducto from './components/BuscarProducto';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Inicio} />
        <Route path='/Main' component={Main} />
        <Route path='/Ventas' component={Ventas} />
        <Route path='/Pagos' component={Pagos} />
        <Route path='/BuscarProducto' component={BuscarProducto} />

        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
