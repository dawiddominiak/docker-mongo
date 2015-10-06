conn = new Mongo();
db = conn.getDB(database_name);

db.createUser(
	{
		user: mongo_user,
		pwd: mongo_password,
		roles: [
			'userAdminAnyDatabase',
			'readWriteAnyDatabase'
		]
	}
);