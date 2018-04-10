var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var service = params.service;


	global.APIServer.Core.classes[__class_name][__method_name](service, __account, __db_client, __cb);
};

module.exports = mAPI;