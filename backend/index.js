const express = require("express");
const Connection = require('./connection.js')
const cors = require("cors"); // Import cors
const noteRouter = require('./routes/notes.js')

Connection()

const app = express();
PORT = 8001;
app.use(cors()); 
app.use(express.json())
app.use('/notes', noteRouter)
app.listen(PORT, console.log(`Server connected to PORT:${PORT}`));
