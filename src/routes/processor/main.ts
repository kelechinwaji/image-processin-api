import sharp from 'sharp';
import express, { Request, Response } from 'express';

const processorRoutes = express.Router();

//endpoint

processorRoutes.get('/processor', async (req: Request, res: Response) => {
  try {
    await sharp('images/img.jpg')
      .resize(300, 300)
      .toFile('image-Output/newpic.jpg');
    res.send('Task Completed');
  } catch (error) {
    console.log(error);
  }
});

export default processorRoutes;
