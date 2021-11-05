import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Post from './containers/Post';

function App() {
  return (
    <main>
      <section>
        <BrowserRouter>
          <Switch>
            <Route path='/:subject/:id' >
              <Post />
            </Route>
            <Route path='/' >
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
