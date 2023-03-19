import express from "express";
import { 
    Request,
    Response,
    NextFunction,
 } from "express";
// import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response, nest: NextFunction) => {
    res.send("Hello my friends!");
});

app.listen(port, ()=> {
    console.log(`server runing on port ${port}`);
});
