var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var offset = params.offset;
	var count = params.count;
	var sizes = params.sizes;
	var album = params.album;


	global.APIServer.Core.classes[__class_name][__method_name](offset, count, sizes, album, __account, __db_client, __cb);
};

module.exports = mAPI;