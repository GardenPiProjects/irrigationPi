const Campi = require('campi');
const camera = new Campi();
const path = './image/image.jpg';
const cloudinary = require('cloudinary');

module.exports = {
  takePhoto() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    return new Promise((resolve, reject) => {
      camera.getImageAsFile({q:10},path, err => {
        if (err) {
          console.log('error', err);
          resolve('no image could be taken');
        }
        else {
           // cloudinary.api.delete_all_resources((result)=>{
	   // console.log(result)}); 
	    cloudinary.uploader.upload("./image/image.jpg", result => {
            resolve(result.url);
          }, { tags: ['gardenPi', 'dailyReport'] });
        }
      });
    });
  }
}
