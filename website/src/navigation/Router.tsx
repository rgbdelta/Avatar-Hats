import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WaitingComponent } from '../components/ui-kit/WaitingComponent';
const Home = React.lazy(() => import('../pages/home/Home'));

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WaitingComponent(Home)} />
      </Switch>
    </BrowserRouter>
  );
};
