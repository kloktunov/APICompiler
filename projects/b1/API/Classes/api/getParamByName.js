var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var class_name = params.class_name;
	var method_name = params.method_name;
	var param_name = params.param_name;


	global.APIServer.Core.classes[__class_name][__method_name](class_name, method_name, param_name, __account, __cb);
};

module.exports = mAPI;