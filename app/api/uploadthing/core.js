import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  courseImageUploader: f({ image: { maxFileSize: "5MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete", metadata);
      // console.log("file url", file.url);
    }
  ),
  courseAttachmentUploader: f(["pdf"]).onUploadComplete(
    async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // console.log("Upload complete", metadata);
      // console.log("file url", file.url);
    }
  ),
};
