var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var offset = params.offset;
	var count = params.count;


	global.APIServer.Core.classes[__class_name][__method_name](offset, count, __account, __db_client, __cb);
};

module.exports = mAPI;