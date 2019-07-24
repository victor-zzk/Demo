import jsonp from 'assets/js/jsonp';
import { JSONP_OPTIONS } from './config';

// 获取详情页 -- Jsonp

export const getProductResult = (id) => {
  const url = 'https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    jsv: '2.4.8',
    appKey: 12574478,
    t: 1563035525549,
    sign: '35f0d188e0fa3deb19a99780c14c1fe6',
    api: 'mtop.taobao.detail.getdetail',
    v: '6.0',
    dataType: 'jsonp',
    ttid: '2017%40taobao_h5_6.6.0',
    AntiCreep: 'true',
    type: 'json',
    data: `%7B%22itemNumId%22%3A%22${id}%22%7D`
  };

  return jsonp(url, params, JSONP_OPTIONS).then(res => {
    if (res) {
      console.log(res);
      return res;
    } else {
      throw new Error('没有成功获取到数据！');
    }
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  });
};
