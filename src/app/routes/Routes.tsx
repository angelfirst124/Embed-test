import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from 'app/pages/dashboard'
import Loading from 'app/@core/loading'

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}

export default Routes
