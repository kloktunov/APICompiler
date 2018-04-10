var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var id = params.id;


	global.APIServer.Core.classes[__class_name][__method_name](id, __account, __cb);
};

module.exports = mAPI;