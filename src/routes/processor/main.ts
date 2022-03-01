import sharp from "sharp";
import  express, {Request, Response} from "express";


const  processorRoutes = express.Router();

//endpoint 

processorRoutes.get('/processor/Ht/:ht/Wd/:wd', async (req:Request, res:Response)=>{
  
    await sharp('images/img.jpg')
    .resize(300, 300)
    .toFile('image-Output/newpic.jpg')
     res.send('Task Completed')
    
})

export default processorRoutes;

