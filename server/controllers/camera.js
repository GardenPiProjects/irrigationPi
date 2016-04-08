const RaspiCam = require("raspicam"),
    camera = new RaspiCam({mode: 'photo', q: 100, t: 1, output:'./image/image.jpg'}),
    cloudinary = require('cloudinary');


module.exports = {
    takePhoto(){
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        return new Promise((resolve, reject)=> {
            camera.start();
            camera.on("read", (err, timestamp, filename)=> {
                if (err) {
                    console.log('error', err);
                    reject('error');
                }
                else {
                    cloudinary.uploader.upload(".image/image.jpg", result=> {
                        resolve(result.url);
                    }, {tags: ['gardenPi', 'dailyReport']});
                }
            });
        });
    }
}

