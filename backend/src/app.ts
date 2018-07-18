import * as bodyParser from 'body-parser';
import express from 'express';
import * as path from "path";
import postLogin, { logout } from './controllers/login';
import { CorsMiddleware } from './middleware/cors';

const app: express.Application = express();

app.use(CorsMiddleware);
app.use(bodyParser.json());


app.use("/", express.static("public"));

// The app routes
app.post('/api/login', postLogin);
app.get('/api/logout', logout);


// Fallback page for html 5 history api based routing in the client side ..
app.get('*', (req, res) => {
    console.log(req.url);
    const filename = req.url;
    if (filename.endsWith('.js')) {
        res.sendFile(path.resolve(__dirname, 'public', filename.replace('/', '')));
    } else {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    }
});

export default app;