/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

/*
exports.uploadImage = onRequest(async (request, response) => {
  try {
    const storage = getStorage();
    connectStorageEmulator(storage, "localhost", 9199); // Connect to local emulator

    const { fileName, fileData } = request.body; // Expecting fileName and fileData in the request body
    if (!fileName || !fileData) {
      response.status(400).send("Missing fileName or fileData in request body.");
      return;
    }

    const storageRef = ref(storage, fileName);
    const buffer = Buffer.from(fileData, "base64"); // Assuming fileData is base64 encoded
    await uploadBytes(storageRef, buffer);

    const downloadURL = await getDownloadURL(storageRef);
    response.status(200).send({ downloadURL });
  } catch (error) {
    logger.error("Error uploading image:", error);
    response.status(500).send("Failed to upload image.");
  }
});
*/
