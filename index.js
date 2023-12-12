const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');




app.use(bodyParser.json());
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/graphql`);
});

