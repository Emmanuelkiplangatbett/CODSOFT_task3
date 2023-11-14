import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calc" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import App from './App';
// import Quote from './Quote';

// const Routes = () => (
//   <div className="Route">
//     <Switch>
//       <Route path="/" component={Home} exact />
//       <Route path="/calc" component={App} />
//       <Route path="/quote" component={Quote} />
//     </Switch>
//   </div>
// );

// export default Routes;
