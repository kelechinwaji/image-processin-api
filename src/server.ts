import  express, { Application} from "express";

const app: Application = express();
const port:number = 5000;


app.listen(port, ()=>{
    console.log(`Listening on port:${port}`);
    
})