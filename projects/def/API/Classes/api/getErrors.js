var mAPI = function (params, class_name, method_name, account, db_client, cb){

	var offset = params.offset;
	var count = params.count;


	global.APIServer.Core.classes[class_name][method_name](offset, count, account, cb);
};

module.exports = mAPI;