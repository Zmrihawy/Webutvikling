mongod --fork --logpath /home/non-root/log.txt --dbpath /home/non-root/data
mongorestore /app/docker/dump/
export MONGOURL="mongodb://localhost/db01"

cd /app/docker/server
npm install
npm start
