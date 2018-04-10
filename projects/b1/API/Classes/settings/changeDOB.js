var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var dob = params.dob;


	global.APIServer.Core.classes[__class_name][__method_name](dob, __account, __db_client, __cb);
};

module.exports = mAPI;