import axios from 'axios'



export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:5000/',
      timeout: 10000,
    });
//  发送真正的网络请求
    return  instance(config)

}

