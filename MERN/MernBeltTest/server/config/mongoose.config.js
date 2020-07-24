const mongooose = require('mongoose');

mongooose.connect("mongodb://localhost/belttest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log(`Established a connection`))
.catch(err => console.log("Something went wrong when connecing to the database", err));