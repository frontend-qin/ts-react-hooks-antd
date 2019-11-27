import React from 'react'
import { Spin } from 'antd'
import './index.less'
const Loading = () => {
  return (
    <div className='loading_container' id='loading'>
      <Spin size='large' />
      <span>请求加载中...</span>
    </div>
  )
}
export default Loading
