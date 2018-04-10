var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var login = params.login;
	var password = params.password;
	var captcha_id = params.captcha_id;
	var captcha_code = params.captcha_code;


	global.APIServer.Core.classes[__class_name][__method_name](login, password, captcha_id, captcha_code, __account, __db_client, __cb);
};

module.exports = mAPI;