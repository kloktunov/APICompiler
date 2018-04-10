var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){

	var sex = params.sex;


	global.APIServer.Core.classes[__class_name][__method_name](sex, __account, __db_client, __cb);
};

module.exports = mAPI;