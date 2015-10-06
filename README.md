# Mongo
### Description
Frontend for [official docker mongo container](https://hub.docker.com/_/mongo/).
Running container executes command starting mongod
and waits for mongod to listen connections on it's port'.
Then the scripts creates new users (of given database and admin root) in proper database contexts
and restart mongo with auth parameter included.

##### The following env variables should be set:
 * DATABASE_NAME - name of database where created root user has "readWrite" access to.
 * MONGO_USER - user name of given database.
 * MONGO_PASSWORD - user password of given database.
 * MONGO_ADMIN_USER - root user name
 * MONGO_ADMIN_PASSWORD - root user password

CMD #should not be overridden ([look at Dockerfile](Dockerfile)).