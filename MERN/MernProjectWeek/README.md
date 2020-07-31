1. git clone https://github.com/MiyaSteven/Mern-Project.git
2. cd Mern-Project
3. npm install - you should see package-lock.json and node_modules on the project level
4. cd client
5. npm install - you should see package-lock.json and node_modules on the client level

Now we will set up the Database

6. Open a new terminal window (assuming you have all necessary mongo available and installed)

- type "mongo" to start the db up
- then type >"show dbs" to make sure you don't already have a user_db
- if you do, delete that user_db if you don't need it, if you need it then you will need to change the files in this repo to fit whatever db_name you make

7. Once in mongo, create a db called user_db

- type >"use user_db"

Now to test, make sure you have 2 unique terminal windows open

8. In terminal window 1, cd into the server folder (assuming you have node)

- type node server.js - you should be "Listening on port 8000 for REQuests to RESpond to." and "Successfully connected to user_db"

9. In terminal window 2, cd into the react client folder

- type nodemon - in your browser, go to url localhost:3000 and you should see the homepage

Adding something to create a branch for Daniel
Complete Third Branch
