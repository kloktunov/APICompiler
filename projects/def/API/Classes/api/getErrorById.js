var mAPI = function (params, class_name, method_name, account, db_client, cb){

	var id = params.id;


	global.APIServer.Core.classes[class_name][method_name](id, account, cb);
};

module.exports = mAPI;