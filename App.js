import express from "express"; 
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
// Init express
const app = express(); 
// use express json
app.use(express.json());
app.use(cors());

//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);

app.listen(5000, () => console.log('Servidor corriendo en localhost:5000...'))