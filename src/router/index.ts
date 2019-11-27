import Loadable from 'react-loadable'
import LoadingComponent from 'src/components/Loading'

// layout 布局
export const Layout = Loadable({
  loader: () => import('src/layout'),
  loading: LoadingComponent
})
// 404 页面
export const NotFound = Loadable({
  loader: () => import('src/view/NotFound'),
  loading: LoadingComponent
})

// 登录页
export const Login = Loadable({
  loader: () => import('src/view/Login'),
  loading: LoadingComponent
})

// layout 里展示的 路由
export const routerList = [
  {
    path: '/home',
    component: Loadable({
      loader: () => import('src/view/Home'),
      loading: LoadingComponent
    })
  },
  {
    path: '/user/list',
    component: Loadable({
      loader: () => import('src/view/User'),
      loading: LoadingComponent
    })
  },
  {
    path: '/user/infor',
    component: Loadable({
      loader: () => import('src/view/User/page/UserInfor'),
      loading: LoadingComponent
    })
  }
]
