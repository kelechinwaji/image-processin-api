# image-processin-api

This is a user friendly application that allows users edit(Resize) images, with just a visit on the Endpoint the Api resizes the images based on the specification provided. The inputs should include a width and a height.

## [Sharp](https://www.npmjs.com/package/sharp)
 The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.

Resizing an image is typically 4x-5x faster than using the quickest ImageMagick and GraphicsMagick settings due to its use of libvips.

Colour spaces, embedded ICC profiles and alpha transparency channels are all handled correctly. Lanczos resampling ensures quality is not sacrificed for speed.


### Tools and Framework
* NodeJs
* TypeScript
* Express
* Jasmine (for testing)
* Eslint and Prettier are used for Greener Code 😊

## Application Set-up
* Install all dependencies `npm install`
* Start the server `npm run start`
* The port would be live on `http://localhost:5000/processor`
 You should see Task Completed and your image available in the `image-Output`

