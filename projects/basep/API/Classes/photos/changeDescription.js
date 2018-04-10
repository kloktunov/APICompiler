var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var id = params.id;
	var description = params.description;


	global.APIServer.Core.classes[__class_name][__method_name](id, description, __account, __db_client, __cb);
};

module.exports = mAPI;