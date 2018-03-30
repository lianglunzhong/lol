/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 服务器域名地址
 * 
 */
let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:8000/api/lol';
}

export {
  baseUrl
};
