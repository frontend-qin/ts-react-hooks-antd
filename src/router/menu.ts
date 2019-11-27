// 定义数组中的每一项
//  extends Record<string, any> 任意属性
export interface ItemType {
  title?: string
  icon?: string
  path: string
  isShow: boolean
  children: menuListType
}

export type menuListType = Array<ItemType>

// 菜单侧边栏
export const menuList: menuListType = [
  {
    title: '首页',
    path: '/home',
    icon: 'home',
    isShow: true,
    children: []
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'user',
    isShow: true,
    children: [
      {
        title: '用户详情',
        path: '/user/infor',
        isShow: true,
        icon: '',
        children: []
      }
    ]
  }
]
