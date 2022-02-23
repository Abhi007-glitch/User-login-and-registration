const express = require("express");
const dotenv = require("dotenv");
const app = express();
const notes = require('./data/notes');
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes');
const { errorHandler, notFound } = require("./middlewares/errorMiddlewares");


dotenv.config(); // this contain some important private data
connectDB(); 
app.use(express.json()) // to send/recive json data through this server

app.get('/', (req, res) => {
    res.send("API is working");
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});


app.use('/api/users', userRoutes)
// all of the users routes are gona follow useRoutes.js

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
