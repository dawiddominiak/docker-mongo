# Mongo
### Description
Frontend for [official docker mongo container](https://hub.docker.com/_/mongo/).
Running container executes command starting mongod
and waits for mongod to listen connections on it's port'.
Then the scripts creates new user in database context
and restart mongo with auth param included.

##### The following env variables should be set:
 * MONGO_USER - database root user name.
 * MONGO_PASSWORD - database root user password.
 * DATABASE_NAME - name of database where created root user has "readWrite" access to.

CMD #should not be overridden ([look at Dockerfile](Dockerfile)).