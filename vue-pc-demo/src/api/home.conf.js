import appConfig from '@/config/env.conf'
import isAbsoluteURL from 'axios/lib/helpers/isAbsoluteURL'
import combineURLs from 'axios/lib/helpers/combineURLs'
let api = {
  home: {
    getUserInfo: 'home/getUserInfo'
  }
}

// 添加api前缀
function addPrefix(prefix, url) {
  if (DataType.isObject(url)) {
    for (let key in url) {
      url[key] = addPrefix(prefix, url[key])
    }
  } else if (DataType.isString(url)) {
    // 不加前缀的情况：
    if (!url.startsWith('/') && // 以'/'开头的
      !url.startsWith(prefix) && // 已经存在前缀了
      !isAbsoluteURL(url) // 绝对地址，例如：http://a.com/ 或者 //a.com/
    ) {
      url = combineURLs(prefix, url)
    }
  }
  return url
}

if (appConfig.apiBaseURL) {
  api = addPrefix(appConfig.apiBaseURL, api)
}

export default api