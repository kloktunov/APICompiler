var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var q = params.q;


	global.APIServer.Core.classes[__class_name][__method_name](q, __account, __db_client, __cb);
};

module.exports = mAPI;