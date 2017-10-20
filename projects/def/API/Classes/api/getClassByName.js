var mAPI = function (params, class_name, method_name, account, db_client, cb){

	var class = params.class;


	global.APIServer.Core.classes[class_name][method_name](class, account, cb);
};

module.exports = mAPI;