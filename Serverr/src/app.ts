import express from "express";
import { 
    Request,
    Response,
    NextFunction,
 } from "express";
 import mysql from "mysql";
 import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql .createConnection({
    host: "localhost",
    user: "root",
    password: "Sunday1993",
    database: "books"
});

app.get("/", (req: Request, res: Response, nest: NextFunction) => {
    res.send("Hello my friends!");
});

app.listen(port, ()=> {
    console.log(`server runing on port ${port}`);
});
