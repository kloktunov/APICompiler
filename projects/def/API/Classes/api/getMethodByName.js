var mAPI = function (params, class_name, method_name, account, db_client, cb){

	var class = params.class;
	var method = params.method;


	global.APIServer.Core.classes[class_name][method_name](class, method, account, cb);
};

module.exports = mAPI;