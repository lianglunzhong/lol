import { baseUrl } from '@/config/env';
// import { fetchJsonp } from 'fetch-jsonp';

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type === 'GET') {
    let dataStr = '';
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }

    if (window.fetch && method === 'fetch') {
      let requestConfig = {
        credentials: 'include',
        method: type,
        headers: {
          'Access-Control-Allow-Origin': baseUrl,
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'force-cache'
      };

      if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {value: JSON.stringify(data)});
      }

      try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      console.log('不支持fetch，哈哈!');
    }
  }
};
