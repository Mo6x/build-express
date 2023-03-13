import express from 'express';
import { 
    Request, 
    Response,
    NextFunction,
    Application,
 } from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.port


