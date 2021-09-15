import aws from "aws-sdk";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config();

const region = "us-east-1";
const bucketName = "drivent-repository";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const bucketS3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});

export async function generateUploadURL() {
  const imageName = uuid();

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  });
    
  const uploadURL = await bucketS3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}
