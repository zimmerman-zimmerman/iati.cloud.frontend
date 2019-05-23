import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLoader from 'app/modules/common/PageLoader';
import Landing from 'app/modules/Landing';
import CookieModule from 'app/modules/common/CookieModule';

const Routes: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/cookies" render={() => <CookieModule />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;