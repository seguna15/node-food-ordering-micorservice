import express, {Application, Request, Response} from "express";
import dotenv from 'dotenv';
import Database from "./services/Database";
import { AdminRoute, VendorRoute } from "./routes/index";


const app: Application = express();

app.use(express.json());
//to enable working with files.
app.use(express.urlencoded({extended: true}))

if(process.env.NODE_ENV !== 'production') dotenv.config();


const port:string = process.env.PORT!;
const api_version: string = process.env.API_VERSION!;
const DB_URL: string = process.env.MONGODB_URI!;

app.use(`${api_version}/admin`, AdminRoute)
app.use(`${api_version}/vendor`, VendorRoute);

Database(DB_URL);

app.listen(port, ()=> {
  console.clear();
  console.log(`server listening on http://localhost:${port}`);
});
