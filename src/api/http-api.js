/*
 * @Author: vincent 1343327598@qq.com
 * @Date: 2022-08-11 10:59:38
 * @LastEditors: vincent 1343327598@qq.com
 * @LastEditTime: 2022-08-11 11:42:48
 * @FilePath: /vincentvue/src/api/http-api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//引入刚才的http.js文件
import https from '../axios/http';
	
	//设置个对象，就不用一个个暴露了，直接暴露对象
	let apiHttp = {};
	
	/* 获取列表 */
	//查询列表，详情就是get
	/* /api/getlist是请求接口地址，有http.js里面的Ip加上，如：http:192.168.0.1:9090//api/getlist  */
	apiHttp.getUserInfo = function(params) {
		return https.get('/index/getUserInfo', params)
	}
	
	/* 新增保存检查计划 */ 
	//保存都是post
	apiHttp.saveJcInfo = function(params) {
		return https.post('/api/saveJcInfo', params)
	}
	
	//暴露出这个对象
	export default apiHttp;


