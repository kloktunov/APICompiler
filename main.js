var fs = require('fs');

var project_name = process.argv[2];
var project_schema = require('./schema.json');


// 1. Создаем папку проекта
var project_dir = './projects/' + project_name;
fs.mkdirSync(project_dir);


// 2. Создаем корневые папки
fs.mkdirSync(project_dir + "/API");
fs.mkdirSync(project_dir + "/Core");
fs.mkdirSync(project_dir + "/API/Classes");
fs.mkdirSync(project_dir + "/Core/Classes");

// 3. Создаем папки для классов
var classes_list = Object.keys(project_schema.classes);

for(var i = 0, length = classes_list.length; i < length; i++){
	
	var class_name = classes_list[i];

	fs.mkdirSync(project_dir + "/API/Classes/" + class_name);
	fs.mkdirSync(project_dir + "/Core/Classes/" + class_name);
}

// 4. Создаем файлы методов
for(var i = 0, length = classes_list.length; i < length; i++){
	
	// Получаем список методов для текущего класса
	var class_name = classes_list[i];
	var methods_list = Object.keys(project_schema.classes[class_name].methods);

	for(var j = 0, length_j = methods_list.length; j < length_j; j++){


		// Получаем список параметров для текущего метода
		var method = project_schema.classes[class_name].methods[methods_list[j]];

		var params_list = Object.keys(method.params);

		// Создаем var_params
		// Созадем params
		var var_params = "";
		var params = "";

		for(var p = 0, length_p = params_list.length; p < length_p; p++){

			var param = method.params[params_list[p]];

			var_params += "	var " + param.name + " = params." + param.name + ";\n";
			params += param.name + ", ";

		}

		params += "account, ";

		if(method.is_db){
			params += "db_client, ";
		}

		// Создаем файл API метдода
		var api_method_content = fs.readFileSync('./templates/api_method_template.js', 'utf8');
		api_method_content = api_method_content.replace("{var_params}", var_params).replace("{params}", params);

		fs.writeFileSync(project_dir + "/API/Classes/" + class_name + "/" + method.name + ".js", api_method_content, "utf8", function (err) {
			if (err) return console.log(err);
			console.log('Hello World > helloworld.txt');
		});

		// Создаем файл Core метдода
		var core_method_content = fs.readFileSync('./templates/core_method_template.js', 'utf8');
		core_method_content = core_method_content.replace("{params}", params);
		fs.writeFileSync(project_dir + "/Core/Classes/" + class_name + "/" + method.name + ".js", core_method_content, "utf8", function (err) {
			if (err) return console.log(err);
			console.log('Hello World > helloworld.txt');
		});


	}

}


/*
1. Проходимся по списку классов и создает папки API/Classes/* Core/Classes/*
2. Создаем файлы методов
    
    2.1. Создаем API/Classes/class_name/method_name.js и заполняем:

	var mAPI = function (params, class_name, method_name, account, db_client, cb){
		
		var {param_name} = params.{param_name};
		
		{params} = {param_name}, {param_name},

		global.APIServer.Core.classes[class_name][method_name]({params} cb);
	};

	module.exports = mAPI;

    2.2. 
    */