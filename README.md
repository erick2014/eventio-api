# Install all the dependencies

npm install

# Setup the database using docker

1. create a folder for your database: open a terminal and type this: mkdir ~/Documents/eventio-api-db
2. open a terminal an run this command: docker run -d -p 2717:27017 -v ~/Documents/eventio-api-db:/data/db --name mymongo mongo

# Run the project

npm run start
