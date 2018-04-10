var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var login = params.login;
	var password = params.password;
	var first_name = params.first_name;
	var last_name = params.last_name;
	var captcha_id = params.captcha_id;
	var captcha_code = params.captcha_code;


	global.APIServer.Core.classes[__class_name][__method_name](login, password, first_name, last_name, captcha_id, captcha_code, __account, __db_client, __cb);
};

module.exports = mAPI;