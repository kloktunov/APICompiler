var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var class_name = params.class_name;
	var method_name = params.method_name;
	var offset = params.offset;
	var count = params.count;


	global.APIServer.Core.classes[__class_name][__method_name](class_name, method_name, offset, count, __account, __cb);
};

module.exports = mAPI;