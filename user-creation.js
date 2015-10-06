conn = new Mongo();
db = conn.getDB(database_name);

db.dropUser(mongo_user);
db.createUser(
	{
		user: mongo_user,
		pwd: mongo_password,
		roles: [
			{
				role: 'userAdminAnyDatabase',
				db: 'admin'
			},
			{
				role: 'readWriteAnyDatabase',
				db: 'admin'
			},
			'readWrite'
		]
	}
);