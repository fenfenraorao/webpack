import axios from 'axios'
import baseUrl from 'baseUrl'

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => config,
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => response.data,
  error => {
    console.log('err', error.response) // for debug
    return Promise.reject(error)
  }
)

export default service
