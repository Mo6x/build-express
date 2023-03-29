import express from "express";
import { 
    Request,
    Response,
    NextFunction,
 } from "express";
 import mysql from "mysql";
 import bodyParser from "body-parser";
 import cors from "cors";


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql .createConnection({
    host: "localhost",
    user: "root",
    password: "Sunday1993",
    database: "books"
});

app.get("/books", (req: Request, res: Response, next: NextFunction) => {
    const q = "SELECT * FROM books";

    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json({
            message: "An error occurred while processing your request.",
            error: err
            });
        }
        return res.json(data);
    });
});


   // CREATED POST SUCCESSFULLY
   app.post("/books", (req: Request, res: Response, next: NextFunction) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?, ?, ?)";
    const values = [ 
        req.body.title,
        req.body.desc,
        req.body.cover,    
    ];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.status(500).json({
            message: "An error occurred while processing your request.",
            error: err
            });
        }
        return res.status(201).json({
            message: "Book has been created successfully",
            bookId: data.insertId
        });
    });
});


   // DELETE POST
app.delete("/books/:id", (req: Request, res: Response) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Book has been deleted successfully");
    })
});


   // UPDATE POST
app.put("/books/:id", (req: Request, res: Response) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ? ";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Book has been updated successfully");
    });
});


app.listen(port, ()=> {
    console.log(`server runing on port ${port}`);
});
