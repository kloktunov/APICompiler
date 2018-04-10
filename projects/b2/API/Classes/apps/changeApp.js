var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var id = params.id;
	var name = params.name;
	var access = params.access;
	var redirect_uri = params.redirect_uri;


	global.APIServer.Core.classes[__class_name][__method_name](id, name, access, redirect_uri, __account, __db_client, __cb);
};

module.exports = mAPI;