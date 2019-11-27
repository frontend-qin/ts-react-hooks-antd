import React, { useEffect, useState } from 'react'
import { Layout, Icon, Avatar, Dropdown, Menu, Breadcrumb } from 'antd'
import './index.less'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { menuList } from 'src/router/menu'

function getTitle(title: string, menuList: any) {
  return menuList.filter((menu: any) => {
    if (menu.children.length > 0) {
      return getTitle(title, menu.children)
    }
    return menu.title === title
  })
}

type menuNameType = {
  title: string
  path: string
}
// 需要让自己的接口继承路由的 RouteComponentProps 接口
interface HeaderProps extends RouteComponentProps {
  isOpen: boolean
  openChange: (params: boolean) => void
  menuName: menuNameType
}

interface paramsType {
  key: string
}

// 定义组件的接口

const AppHeader = (props: HeaderProps) => {
  const toggle = () => {
    props.openChange(!props.isOpen)
  }
  const itemHandle = (params: paramsType) => {
    props.history.push(params.key)
  }
  const [title, setTitle] = useState([props.menuName.title])

  const menu = (
    <Menu onClick={itemHandle}>
      <Menu.Item key='/login'>
        <Icon type='logout' />
        退出
      </Menu.Item>
    </Menu>
  )
  useEffect(() => {
    const { title } = props.menuName
    let backTitle = getTitle(title, menuList)
    // 此处需要做递归处理
    backTitle[0].title === '首页'
      ? setTitle([title])
      : setTitle([backTitle[0].title, props.menuName.title])
  }, [props.menuName])
  return (
    <Layout.Header className='app_header'>
      <div className='menu_float'>
        <span className='menu_icon'>
          <Icon
            className='trigger'
            type={props.isOpen ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </span>
        <Breadcrumb>
          {title.map((item, index) => (
            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div>
        <Dropdown overlay={menu}>
          <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
        </Dropdown>
      </div>
    </Layout.Header>
  )
}
// withRouter
export default withRouter(AppHeader)
