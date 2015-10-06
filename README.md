# Mongo
### Description
Frontend for [official docker mongo container](https://hub.docker.com/_/mongo/).
Running container executes command starting mongod
and waits for mongod to listen connections on it's port'.
Then the scripts creates new user in database context
and restart mongo with auth param included.

##### The following env variables should be set:
 * MONGO_USER
 * MONGO_PASSWORD
 * DATABASE_NAME

CMD #should not be overridden ([look at Dockerfile](Dockerfile)).