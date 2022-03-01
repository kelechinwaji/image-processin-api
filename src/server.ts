import  express, { Application} from "express";
import routes from "./routes/index";


const app: Application = express();
const port:number = 5000;

app.use('/', routes)

app.listen(port, ()=>{
    console.log(`Listening on port:${port}`);
    
})