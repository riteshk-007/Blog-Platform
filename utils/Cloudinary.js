import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  export const uploadImage = async (localfilePath) => {
    try {
        if (!localfilePath) throw new Error('No file path provided');
      const result = await cloudinary.v2.uploader.upload(localfilePath);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }