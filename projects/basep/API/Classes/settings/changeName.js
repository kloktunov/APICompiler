var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var first_name = params.first_name;
	var last_name = params.last_name;


	global.APIServer.Core.classes[__class_name][__method_name](first_name, last_name, __account, __db_client, __cb);
};

module.exports = mAPI;