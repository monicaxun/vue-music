import originalJasonp from 'jsonp'

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + getParam(data)

  return new Promise((resolve, reject) => {
    originalJasonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function getParam (data) {
  let param = ''
  for (let i in data) {
    let value = data[i] ? '' : data[i]
    param += `&${i}=${encodeURIComponent(value)}`
  }

  return param ? param.substring(1) : ''
}
