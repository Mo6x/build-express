import express from "express";
import { 
    Request,
    Response,
    NextFunction,
    Application,
 } from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/"), (req: Request, res: Response, nest: NextFunction) => {
    res.send("Hell my friend");
};

app.listen(port, ()=> {
    console.log(`server runing on port ${port}`);
});
