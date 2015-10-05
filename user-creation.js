conn = new Mongo();
db = conn.getDB('admin');

db.dropUser('admin');
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