import aws from "aws-sdk";
import { v4 as uuid } from "uuid";

require("dotenv").config();

const region = "us-east-1";

const s3 = new aws.S3({
  region: region,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4"
});

export async function generateUploadURL() {
  const imageName = uuid() + ".jpg";

  const params = ({
    Bucket: "drivent-repository",
    Key: imageName,
    ContentType: "multipart/form-data",
    Expires: 60
  });
    
  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}
