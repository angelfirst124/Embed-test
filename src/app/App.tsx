import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Routes from 'app/routes/Routes'
import Layout from 'app/@core/layout'

const history = createBrowserHistory()

const App: React.FC = () => (
  <Router history={history}>
    <BrowserRouter>
      <Switch>
        <Route>
          <Layout>
            <Routes />
          </Layout>            
        </Route>
      </Switch>
    </BrowserRouter>
  </Router>
)

export default App
