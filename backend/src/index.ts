import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routes/users';

const app = express();

// Prefix routes:
app.use('/api/users', usersRouter);

const PORT = 3000;

app.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
});