mkdir app/storage/
mkdir app/storage/cache/
mkdir app/storage/logs/
mkdir app/storage/tmp/
chmod -Rf 777 app/storage/
git submodule init
git submodule update
npm install
grunt build