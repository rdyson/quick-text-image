var fs = require('fs');
var cloudinary = require('cloudinary').v2;
var uploads = {};

const randomImage = 'https://picsum.photos/1080/1080/?random'
const text = process.argv
  .slice(2,process.argv.length)
  .join('  ');

cloudinary.uploader.upload(randomImage, 
  {
    "tags":"til",
    "width":1600,
    "height":1600,
  },

  function(err,image){
  if (err){ console.warn(err);}
  console.log("* "+image.public_id);
  console.log("* "+image.url);
  waitForAllUploads("image",err,image);
});


 function waitForAllUploads(id,err,image){
   uploads[id] = image;
   var ids = Object.keys(uploads);
   if (ids.length==1){
     console.log();
     console.log ('**  uploaded all files ('+ids.join(',')+') to cloudinary');
     performTransformations();
   }
 }

function performTransformations(){
  var finalImage = cloudinary.url(uploads.image.public_id, {transformation: [
    { 
      overlay: "boxOverlay", 
      opacity: 55,
      crop: "scale" 
    },
    {
      overlay: "text:Crete%20Round_100:" + text, 
      color: "white",
      width: 1000,
      crop: "fit" 
    },
  ]});

  console.log('finalImage: ', finalImage);
}
