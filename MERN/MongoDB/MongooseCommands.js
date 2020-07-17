
// Defining a user Schema
// Create a Schema for Users
const UserSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
}, { timestamps: true })
// create a constructor function for our model and store in variable 'User'
const User = mongoose.modelcopy('User', UserSchema);


// finding all users
// ...retrieve an array of all documents in the User collection
User.find()
    .then(users => {
        // logic with users results
    })
    .catch(err => res.json(err));


// Finding all user with the name Jessica
// ...retrieve an array of documents matching the query object criteria
User.find({name:'Jessica'}) 
    .then(usersNamedJessica => {
        // logic with usersNamedJessica results
    })
    .catch(err => res.json(err));


// Find User by Id
// ...retrieve 1 document (the first record found) matching the query object criteria
User.findOne({_id: '5d34d361db64c9267ed91f73'})
    .then(user => {
        // logic with single user object result
    })
    .catch(err => res.json(err));



// Create a User
 // ...create a new document to store in the User collection and save it to the DB.
 const bob = new User(req.body);
 // req.body is an object containing all the users data.
 // if we look at req.body as an object literal it would look like this
     /*
      * req.body = {
      *		"name": "Bob Ross",
      *		"age": 42
      *	}
     **/
 bob.save()
     .then(newUser => {
         // logic with succesfully saved newUser object
     })
     .catch(err => res.json(err));
  // If there's an error and the record was not saved, this (err) will contain validation errors.
 <div id="copy-toolbar-container" style="cursor: pointer; position: absolute; top: 5px; right: 5px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;"><span id="copy-toolbar">copy</span></div>


//  Create a User Simplified
 // ...create a new document to store in the User collection and save it to the DB.
 const { userData } = req.body;
 User.create(userData)
     .then(newUser => {
         // logic with succesfully saved newUser object
     })
     .catch(err => res.json(err));
  // If there's an error and the record was not saved, this (err) will contain validation errors.


//   Delete All users
// ...delete all documents of the User collection
User.remove()
    .then(deletedUsers => {
        // logic (if any) with successfully removed deletedUsers object
    })
    .catch(err => res.json(err));


// Delete one User
// ...delete 1 document that matches the query object criteria
User.remove({_id: '5d34d361db64c9267ed91f73'})
    .then(deletedUser => {
        // logic (if any) with successfully removed deletedUser object
    })
    .catch(err => res.json(err));


// Update One Record
// ...update 1 document that matches the query object criteria
User.updateOne({name:'Bob Ross'}, {
        name: 'Ross Bob',
        $push: {pets: {name: 'Sprinkles', type: 'Chubby Unicorn' }}
    })
        .then(result => {
            // logic with result -- note this will be the original object by default!
        })
        .catch(err => res.json(err));
    

// Advanced Queries

    // An Alternative way to Update a record
    User.findOne({name: 'Bob Ross'})
        .then(user => {
            user.name = 'Rob Boss';
            user.pets.push({name: 'Sprinkles', type: 'Chubby Unicorn'});
            return user.save();
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));


// Validate for uniqueness before Creating new DB Entry
    User.exists({name: req.body.name})
        .then(userExists => {
            if (userExists) {
                // Promise.reject() will activate the .catch() below.
                return Promise.reject('Error Message Goes Here');
            }
            return User.create(req.body);
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));
    