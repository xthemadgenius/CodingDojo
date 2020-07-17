# Git Bash

// Open Git Bash => type this out to get in database

cd C:/"Program Files"/MongoDB/Server/4.2/bin

//start database

./mongo or mongo.exe

# Command Prompt

// created Shortcut in Eviormental Varibles => System Varibles simply type 

mongod

// ---> OR <--- //

cd C:/"Program Files"/MongoDB/Server/4.2/bin

//start database

mongo.exe


# Command Line

brew services start mongodb-community

mongo

// Shutting down if your mongod window got closed:

//This is harder.  Open a terminal window and type:

ps -ax | grep mongo

// then copy the number on the left of the row that shows 'sudo mongo' (or if that's not there, just 'mongo')  This is the process ID of the mongod command you ran.  Take that number and type

sudo kill *that_number*

// And you'll be good.  The kill command tells a process ID to terminate.  Intense terminal stuff, huh?