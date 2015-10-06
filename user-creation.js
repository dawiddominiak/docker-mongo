var conn = new Mongo();

//creating admin user
var admin_db = conn.getDB('admin');
admin_db.dropUser(mongo_admin_user);
admin_db.createUser(
	{
		user: mongo_admin_user,
		pwd: mongo_admin_password,
		roles: [
			'root'
		]
	}
);

//creating connection user
var common_db = conn.getDB(database_name);
common_db.dropUser(mongo_user);
common_db.createUser(
	{
		user: mongo_user,
		pwd: mongo_password,
		roles: [
			'readWrite'
		]
	}
);