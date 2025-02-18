import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null, file.originalname)
    }
})

//by chatgpt
//const storage = multer.memoryStorage(); // Use memory storage for Cloudinary

const upload = multer({storage})

export default upload