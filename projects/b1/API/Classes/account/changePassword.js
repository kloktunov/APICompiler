var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var password = params.password;
	var new_password = params.new_password;


	global.APIServer.Core.classes[__class_name][__method_name](password, new_password, __account, __db_client, __cb);
};

module.exports = mAPI;