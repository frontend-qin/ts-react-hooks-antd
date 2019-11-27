import React from 'react'
import './style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Layout, routerList, NotFound } from 'src/router/index'
// 需要给路由提供一个 接口
// interface Props extends RouteComponentProps {}
interface Props {}
const AppRouter = (props: Props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route
            render={() => (
              <Layout>
                <Switch>
                  {routerList.map(item => (
                    <Route
                      path={item.path}
                      component={item.component}
                      key={item.path}
                    />
                  ))}
                </Switch>
              </Layout>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
