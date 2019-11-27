import axios from 'axios'
import { message } from 'antd'
let dom = document.getElementById('loading')
const loading = {
  open() {
    dom!.style.display = 'flex'
  },
  close() {
    dom!.style.display = 'none'
  }
}
const service = axios.create({
  baseURL: 'http://yapi.demo.qunar.com/mock/23750/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    loading.open()
    return config
  },
  error => {
    loading.close()
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    loading.close()
    const { msg, code, data } = response.data
    if (code === 200) {
      if (msg) {
        message.success(msg)
      }
      return data
    }
  },
  error => {
    loading.close()
    Promise.reject(error)
  }
)

export default service
