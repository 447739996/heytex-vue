import axios from 'axios'

const service = axios.create({
    // baseURL: window.location.origin+'/mobile',
    baseURL: '/',
    timeout: 60000,
})

service.interceptors.request.use(config => {
    return config
}, (error) => Promise.reject(error))

service.interceptors.response.use(response => {
    const res = response.data
    // 这里是接口处理的一个示范，可以根据自己的项目需求更改
    // 错误处理
    console.log(res)
    if (res.code != 0 && res.message) {
        if (res.code == 403) {
            console.log(res)
        }

        return Promise.reject()
    }

    // 如果接口正常，直接返回数据
    return res
}, (error) => {
 

    return Promise.reject(error)
})

export default service