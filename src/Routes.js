import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from './components/Product/Products.js';
import CardDetailProduct from './components/CardDetailProduct/CardDetailProduct.js';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/details/:id" component={CardDetailProduct} />
  </Switch>
);

export default Routes;
