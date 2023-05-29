import bodyParser from 'body-parser' ;
import express from 'express' ;

const app = express () ;// initalize express application. The whole application lies in this function.
const PORT = 5000;

app.use(bodyParser.json()); //saying we will use js data in whole app
app.listen(PORT , () => console.log("server running on port: http://localhost${PORT}" )) ;