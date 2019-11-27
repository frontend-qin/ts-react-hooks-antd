import React from 'react'
import { Spin } from 'antd'
import './index.less'
const Loading = () => {
  return (
    <div className='loading_container'>
      <Spin size='large' />
      <span>页面加载中</span>
    </div>
  )
}

export default Loading
