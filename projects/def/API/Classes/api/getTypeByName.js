var mAPI = function (params, class_name, method_name, account, db_client, cb){

	var type = params.type;


	global.APIServer.Core.classes[class_name][method_name](type, account, cb);
};

module.exports = mAPI;