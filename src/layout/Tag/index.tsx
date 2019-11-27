import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import './index.less'
import { withRouter, RouteComponentProps } from 'react-router'
const { TabPane } = Tabs

type menuType = {
  title: string
  path: string
}
interface Props extends RouteComponentProps {
  menuList: Array<any>
  activeMenu: menuType
  onTabPan: (data: string, activeKey: string) => void
}

const Tag = (props: Props) => {
  const [panes, setPanes] = useState(props.menuList)
  let [activeKey, setActiveKey] = useState(props.activeMenu.path)
  useEffect(() => {
    setActiveKey(props.activeMenu.path)
  }, [props.activeMenu])
  useEffect(() => {
    setPanes(props.menuList)
  }, [props.menuList])

  // 点击切换选项卡
  const onChange = (activeKey: string) => {
    props.history.push(activeKey)
    setActiveKey(activeKey)
    props.onTabPan('', activeKey)
  }

  const onEdit = (targetKey: any, action: 'add' | 'remove') => {
    remove(targetKey)
  }
  const [lastIndex, setLastIndex] = useState(0)
  // 删除标签
  const remove = (targetKey: any) => {
    panes.forEach((pane, i) => pane.path === targetKey && setLastIndex(i - 1))
    const newPanes = panes.filter(pane => pane.path !== targetKey)
    if (newPanes.length && activeKey === targetKey) {
      activeKey = lastIndex >= 0 ? newPanes[lastIndex].path : newPanes[0].path
    }
    setActiveKey(activeKey)
    setPanes(newPanes)
    props.onTabPan(targetKey, activeKey)
  }
  return (
    <Tabs
      hideAdd
      onChange={onChange}
      activeKey={activeKey}
      type='editable-card'
      onEdit={onEdit}
      tabBarGutter={5}
    >
      {panes.map(pane => (
        <TabPane tab={pane.title} key={pane.path}></TabPane>
      ))}
    </Tabs>
  )
}

export default withRouter(Tag)
