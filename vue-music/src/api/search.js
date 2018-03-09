import { commonParams, options } from 'api/config'
import jsonp from 'common/js/jsonp'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: 573218424,
    platform: 'h5',
    needNewCode: 1,
    _: +new Date()
  })
  return jsonp(url, data, options)
}

export function search (query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParams, {
    g_tk: 573218424,
    platform: 'h5',
    needNewCode: 1,
    w: query,
    zhidaqu: zhida ? 1 : 0,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage,
    n: perpage,
    p: page,
    remoteplace: 'txt.mqq.all',
    _: +new Date()
  })
  return jsonp(url, data, options)
}