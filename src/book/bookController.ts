
import { Request, Response,NextFunction } from "express"
import cloudinary from "../config/cloudinary";

const createBook = async (
    req: Request,
    res: Response,
     next: NextFunction) => {

console.log('files', req.files);
// const coverImageMimeType = req.files.coverImage

// const uploadResult = await cloudinary.uploader.upload(filePath, {
//         filename_override: filename,
//         folder:'book-covers',
//         format:coverImageMimeType,
// })

        res.json({});
} ;

export default createBook