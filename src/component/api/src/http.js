/**
 * @author wuchao@cloudolp.com
 * 针对axios组件二次封装，支持各种请求，包括图片上传请求，http错误处理
 */
import axios from 'axios'

const domain = "marketing"

export default class Http {

  constructor () {
    this.$http = this.newAxios();
    this.token = '9464DC2DD36540A976E2F1F30CFD450767C9CD691B4A0C447CC14FA5C0DAE52B3723E9F6F41543D631CC7CAD4BFA7DA9B8FB6D56D613F6F096DFBD535910AC44EE87F638AD4B4E641EB20887377272D57564965625D5C627EE39FC505142DE2380C60A79A263736580A9FE607E6C5770168219BD306EABA0F22B4787C23145D7';
  }

  newAxios(){
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: this.token
      },
      timeout: 1000 * 5,
    });
  }

  setToken(token){
    this.token = token;
    this.$http = this.newAxios();
  }


  test(url, params, callBack){
    let _this = this;
    this.$http.get(url, {params: params}).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * get 请求
   * @param url
   * @param params 参数
   * @param callBack 回到函数
   */
  get(url, params, callBack){
    let _this = this;
    this.$http.get(this.appendDomain(url), {params: params}).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * 通用分页
   * @param url
   * @param size 每页显示条数
   * @param page 当前页下标
   * @param callBack 回调函数
   */
  getPage(url, size, page, callBack){
    let _this = this;
    let params = {size: size, page: page};
    this.$http.get(this.appendDomain(url), {params: params}).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * 默认分页，默认每页显示10条
   * @param url
   * @param page 当前页下标
   * @param callBack 回调函数
   */
  getDefaultPage(url, page, callBack){
    var _this = this;
    var params = {size: 10, page: page};
    this.$http.get(this.appendDomain(url), {params: params}).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * post请求
   * @param url
   * @param params
   * @param callBack
   */
  post(url, params, callBack){
    let _this = this;
    this.$http.post(this.appendDomain(url), params).then(response => {
      // console.log('xxx = ' + JSON.stringify(response));
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * [postUrl description]
   * @param  {[type]} url      [description]
   * @param  {[type]} params   [description]
   * @param  {[type]} callBack [description]
   * @return {[type]}          [description]
   */
  postUrl(url, params, callBack){
    let _this = this;
    this.$http.post(this.appendDomain(url) + this.urlParams(params), null).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  urlParams(params) {
    if(params == null) return '';
    var paramStr = '?';
    for (var key in params) {
      paramStr += key +"="+params[key] +"&";
    }
    paramStr= paramStr.substring(0, paramStr.length - 1);  //将a字符串转换成数组
    return paramStr;
  };

  /**
   * put 请求
   * @param url
   * @param params
   * @param callBack
   */
  put(url, params, callBack){
    let _this = this;
    this.$http.put(this.appendDomain(url), params).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  putUrl(url, params, callBack){
    let _this = this;
    this.$http.put(this.appendDomain(url) + this.urlParams(params), null).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * delete请求
   * @param url
   * @param params
   * @param callBack
   */
  delete(url, params, callBack){
    let _this = this;
    this.$http.delete(this.appendDomain(url), {params: params}).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * [putUploadFile description]
   * @param  {[type]} url      [description]
   * @param  {[type]} formData [description]
   * @param  {[type]} callBack [description]
   * @return {[type]}          [description]
   */
  putFileUpload(url, formData, callBack){
    let _this = this;
    let config = {headers:{"Content-Type":'multipart/form-data', Authorization: this.token}};
    axios.put(this.appendDomain(url), formData, config).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * post表单提交
   * @param  {[type]} url      [地址]
   * @param  {[type]} formData [表单对象]
   * @param  {[type]} callBack [回调函数]
   * @return {[type]}          [reponse]
   */
  postFileUpload(url, formData, callBack){
    let _this = this;
    let config = {headers:{"Content-Type":'multipart/form-data', Authorization: this.token}};
    axios.post(this.appendDomain(url), formData, config).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  handleError(error) {
    let resp = {code: 0, message: null, random: Math.random() * 100};
    if (error.response) {
      if(error.response.status === 401){
        window.postMessage('401', '*');
        resp.code = 401;
      }else if(error.response.status === 500){
        resp.message = "服务器内部出错";
        resp.code = 500;
      }else if(error.response.status === 504){
        resp.message = error.response.data;
        resp.code = 504;
      }else if(error.response.status === 502){
        resp.message = "网关延时";
        resp.code = 502;
      }else if(error.response.status === 503){
        resp.message = "服务未启动";
        resp.code = 502;
      }
    } else {
      resp.code = -1;
      resp.message = error.message;
    }
    return resp;
  }

  appendDomain(url){
    if(url.indexOf('/') !== -1){
      var urls = url.split('/');
      if(urls && urls.length > 2 && urls[1] === 'api')
        return url;
      return domain + '/api/' + url;
    }
    return domain + '/api/' + url;
  }

}
