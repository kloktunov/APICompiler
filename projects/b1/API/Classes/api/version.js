var mAPI = function (params, __class_name, __method_name, __account, __db_client, __cb){



	global.APIServer.Core.classes[__class_name][__method_name](__account, __cb);
};

module.exports = mAPI;