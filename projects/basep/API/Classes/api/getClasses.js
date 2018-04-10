var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var offset = params.offset;
	var count = params.count;

	var classes_list = Object.keys(global.APIServer.API.classes);

	var response = {

	};

	for(var i = offset; i < count && i < classes_list.length; i++){

		var class_name = classes_list[i];

		response[class_name] = {
			name: global.APIServer.API.classes[class_name].name,
			description: global.APIServer.API.classes[class_name].description
		};
	}

	global.APIServer.Core.classes[__class_name][__method_name](offset, count, __account, __cb);
};

module.exports = mAPI;