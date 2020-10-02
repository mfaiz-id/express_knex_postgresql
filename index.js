const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.json({message:'Halo Milenial Digital - www.milenialdigital.com'});
});

app.listen(port, () => console.log(`listening on port: ${port}`));
