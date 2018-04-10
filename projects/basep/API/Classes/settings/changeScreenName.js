var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var screen_name = params.screen_name;


	global.APIServer.Core.classes[__class_name][__method_name](screen_name, __account, __db_client, __cb);
};

module.exports = mAPI;