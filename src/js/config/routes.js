import React from "react"
import { Route, IndexRoute } from 'react-router'


import App from "../components/App"
import RentalCalculator from "../containers/RentalCalculator"
import PageNotFound from '../components/PageNotFound'

const routes = (store) => {

  return (
      <Route>
          <Route path="/" component={App} >
            <IndexRoute component={RentalCalculator} />
          </Route>

          <Route path="*" component={PageNotFound} />
      </Route>
  );
}

export default routes;
