conn = new Mongo();
db = conn.getDB('admin');

db.dropUser(mongo_user);
db.createUser(
	{
		user: mongo_user,
		pwd: mongo_password,
		roles: [
			{
				role: 'readWrite',
				db: database_name
			},
			'root'
		]
	}
);