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


# Basic Mongo DB Commands

// shows all database

show dbs

//show current database

db

//change/create database

use DB_NAME

// delete database

db.dropDatabase() //deletes their current database

use DBNAME.db.dropDatabase() //deletes another database

show collections // show collections in database

db.createCollection("COLLECTIONNAME") // create collection

db.COLLECTIONNAME.drop() //deletes collection

db.COLLECTIONNAME.insert({MAKE: "MAKE"}) // insert objects in collections

db.COLLECTIONNAME.find()

db.COLLECTIONNAME.find({name: "NAME"})

db.COLLECTIONNAME.find({})

db.COLLECTIONNAME.find().pretty()

db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})// Notice: You can't just pass the string of characters, you must pass it as an ObjectId.

db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)

db.ninjas.remove({belt: "yellow"})

db.ninjas.remove({belt: "yellow"}, false) // this query would have the same effect as the one above.


db.COLLECTIONNAME.update(name:"NAME" , {belt:"BELT"}),

de.COLLECTIONNAME.update(name:"NAME", {$set:{location: "NAME"}})

# Operators

name	description

$gt     (greater than)	Use to query selectively on numerical-valued fields

$gte    (greater than or equal to)	Use to query selectively on numerical-valued fields

$lt     (less than)	Use to query selectively on numerical-valued fields

$lte    (less than or equal to)	Use to query selectively on numerical-valued fields

$in     (in array)	Use to find documents who have a particular value within an array.

https://docs.mongodb.com/manual/reference/operator/

$push	Push to an array contained within a document.

$pop	Removes either the first or last element from an array. EX: db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})
  
Use 1 for the last item in the array, -1 for the first item.

$addToSet	It functions just like $push.  However, $addToSet only adds to the specified array if the value doesn't already exist (thereby preventing duplicate entries).

$pull	    Removes a specified value from an array, unlike $pop, which removes by location. Ex:db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}})
  
This will remove all instances of VALUE from the documents with the array specified by the array_key that match QUERY.