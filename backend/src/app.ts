import * as bodyParser from 'body-parser';
import express from 'express';
import postLogin, { logout } from './controllers/login';
import { CorsMiddleware } from './middleware/cors';

const app: express.Application = express();

app.use(CorsMiddleware);
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
});


// The app routes
app.post('/login', postLogin);
app.get('/logout', logout);

export default app;