var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var pid = params.pid;
	var width_crop = params.width_crop;
	var x_crop = params.x_crop;
	var y_crop = params.y_crop;


	global.APIServer.Core.classes[__class_name][__method_name](pid, width_crop, x_crop, y_crop, __account, __db_client, __cb);
};

module.exports = mAPI;