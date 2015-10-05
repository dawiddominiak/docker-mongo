#!/bin/bash

log_path=/var/log/mongodb/mongo_database_log.log

if [ "$LOG_PATH" ]; then
	log_path=$LOG_PATH
else
	echo Log path not set. Setting default: $log_path .
fi

dir_path=$(dirname $log_path)
log_file=$(basename $log_path)

mkdir -p $dir_path
touch $log_path

user="admin"
password="admin"

if [ "$MONGO_USER" ] && [ "$MONGO_PASSWORD" ]; then
	user=$MONGO_USER
	password=$MONGO_PASSWORD
else
	echo User and password of user set as default to admin:admin.
fi

mongod --smallfiles --logpath $log_path --logappend &
mongo_pid=$!

grep -q 'waiting for connections on port' $log_path
while [[ $? -ne 0 ]] ; do
	sleep 2
	echo "Waiting for mongo to initialize ..."
	grep -q 'waiting for connections on port' $log_path
done

echo "var mongo_user = '"$user"', mongo_password = '"$password"';" > settings.js
cat ./user-creation.js >> ./settings.js
mongo ./settings.js
kill $mongo_pid

mv $log_path $log_path".backup"
mongod --auth --smallfiles --logpath $log_path --logappend &
mongo_pid=$!
grep -q 'waiting for connections on port' $log_path

while [[ $? -ne 0 ]] ; do
	sleep 2
	echo "Waiting for mongo to initialize ..."
	grep -q 'waiting for connections on port' $log_path
done

wait $mongo_pid