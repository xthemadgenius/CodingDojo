express = require('express');
const app = express();
const port = 8000;
require('./server/routes/product.routes')(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})