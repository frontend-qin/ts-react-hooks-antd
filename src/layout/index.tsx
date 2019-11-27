import React, { useState } from 'react'
import { Layout, Card } from 'antd'
import AppSideBar from './SideBar'
import AppHeader from './Header'
import Tag from './Tag'
import './index.less'

// props.children 约束
export interface LayoutProps extends React.Props<any> {}

// 定义changeCollspan 函数的类型
type ChangeCollspanType = (isOpen: boolean) => void

let activeRoute = {
  title: '首页',
  path: '/home'
}
const Index = (props: LayoutProps): React.ReactElement => {
  const [collspans, setCollspans] = useState(false)
  const [activeMenu, setActiveMenu] = useState(activeRoute)
  const [menuList, setMenuList] = useState([activeRoute])
  //点击按钮的回调事件
  const changeCollspan: ChangeCollspanType = isOpen => setCollspans(isOpen)
  // 选择菜单后的回调
  const menuClick = (data: any) => {
    let isHas = menuList.some(item => item.title === data.title)
    !isHas && menuList.push(data)
    setMenuList(menuList)
    setActiveMenu(data)
  }
  // 选项卡的删除按钮
  const tabClickHandle = (path: string, activePath: string) => {
    let newMenuList = menuList.filter(item => item.path !== path)
    setMenuList(newMenuList)
    let newActiveMenu: any = menuList.filter(item => item.path === activePath)
    setActiveMenu(newActiveMenu[0])
  }
  return (
    <Layout>
      <AppSideBar
        isOpen={collspans}
        onMenuClick={menuClick}
        activeMenu={activeMenu}
      />
      <Layout>
        <AppHeader
          isOpen={collspans}
          openChange={changeCollspan}
          menuName={activeMenu}
        />
        <Tag
          menuList={menuList}
          activeMenu={activeMenu}
          onTabPan={tabClickHandle}
        />
        <Layout.Content className='content'>
          <Card bordered={false}>{props.children}</Card>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
export default Index
