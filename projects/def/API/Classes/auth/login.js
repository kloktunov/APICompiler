var mAPI = function (params, class_name, method_name, account, db_client, cb){

	var login = params.login;
	var password = params.password;


	global.APIServer.Core.classes[class_name][method_name](login, password, account, db_client, cb);
};

module.exports = mAPI;