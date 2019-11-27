import React, { useEffect, useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { menuList, menuListType } from 'src/router/menu'
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom'
import './index.less'

const { SubMenu } = Menu
// 修饰侧边栏菜单
type DataType = {
  title: string
  path: string
}
interface SideBarProps extends RouteComponentProps {
  isOpen: boolean
  onMenuClick: (data: DataType) => void
  activeMenu: any
}

interface SelectParam {
  key: string
  keyPath: Array<string>
  item: any
  domEvent: Event
  selectedKeys: Array<string>
}

const AppSideBar = (props: SideBarProps) => {
  // 渲染菜单数据
  const renderMenu = (data: menuListType) => {
    return data.map(item => {
      if (item.isShow) {
        //   如果children.length > 0,接着递归
        if (item.children.length > 0) {
          return (
            <SubMenu
              key={item.path}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              }
            >
              {renderMenu(item.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={item.path}>
            <NavLink to={item.path}>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span>{item.title}</span>
            </NavLink>
          </Menu.Item>
        )
      }
    })
  }
  const [path, setPath] = useState(props.activeMenu.path)
  useEffect(() => {
    props.history.push(path)
  }, [])

  useEffect(() => {
    let path = props.activeMenu.path
    setPath(path)
    props.history.push(path)
  }, [props.activeMenu])

  // 点击menuItme 的回调
  const menuHandle = (item: SelectParam) => {
    setPath(item.key)
    let dom: any = item.domEvent.target
    props.onMenuClick({
      title: dom!.innerText,
      path: item.key
    })
  }
  return (
    <Layout.Sider trigger={null} collapsible collapsed={props.isOpen}>
      <div className='logo' />
      <Menu
        mode='inline'
        theme='dark'
        onSelect={menuHandle}
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        style={{ borderRight: 0 }}
        className='sider_bar'
      >
        {renderMenu(menuList)}
      </Menu>
    </Layout.Sider>
  )
}

export default withRouter(AppSideBar)
