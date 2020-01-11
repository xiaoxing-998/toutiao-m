/**
 *封装axios请求模块 便于维护
 */
import axios from 'axios'
import jsonBig from 'json-bigint'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'// 在创建实例时配置默认值 如果拼接时有两个/会多退少补
})

request.defaults.transformResponse = [function (data) {
  // 响应拦截之前执行的函数 、 data就是后台返回的响应数据
  try {
    // 如果转换成功则返回成功的结果给请求使用 是三个字母  需要.tostring()
    return jsonBig.parse(data)
  } catch (err) {
    // 如果转换失败则进入 catch，返回一个空对象 这样就不会报错 undefined会报错
    console.log(err)
    return {}
  }
}]
// 请求拦截器

// 响应拦截器

export default request
