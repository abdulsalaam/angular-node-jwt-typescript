import * as bodyParser from 'body-parser';
import express from 'express';
import postLogin from './controllers/login';

const app: express.Application = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
});


// The app routes
app.post('/login', postLogin);

export default app;