var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var login = params.login;
	var password = params.password;
	var new_login = params.new_login;


	global.APIServer.Core.classes[__class_name][__method_name](login, password, new_login, __account, __db_client, __cb);
};

module.exports = mAPI;