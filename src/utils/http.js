/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Loading, Message } from 'element-ui'

// 超时时间
axios.defaults.timeout = 5000

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://39.107.102.246'
var loadinginstace

// http请求拦截器
axios.interceptors.request.use(config => {
    // element ui Loading方法
    // loadinginstace = Loading.service({ fullscreen: true })
    return config
}
    // , error => {
    //     // loadinginstace.close()
    //     Message.error({
    //         message: '加载超时'
    //     })
    //     return Promise.reject(error)
    // }
)

// http响应拦截器
axios.interceptors.response.use(response => {
    // loadinginstace.close()
    if (response.data.status == -2) {
        // window.location.href = "/#/login";
        Message.error({
            message: '权限不足'
        })
        return "";
    } else {
        // loadinginstace.close()
        return response;
    }
}
    // , error => {
    //     Message.error({
    //         message: '加载失败'
    //     }
    //     )
    //     return Promise.reject(error)
    // }
    )

export default axios