import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Bin2Dec from '../pages/Bin2Dec';
import Dec2Bin from '../pages/Dec2Bin';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/bin2dec" />
      <Route path="/bin2dec" exact component={Bin2Dec} />
      <Route path="/dec2bin" component={Dec2Bin} />
    </Switch>
  );
};

export default Routes;
