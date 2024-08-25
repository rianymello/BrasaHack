const tesseract = require("tesseract.js");
const asyncHandler = require("express-async-handler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

exports.read = [
  upload.single("nota_fiscal"),

  asyncHandler(async (req, res, next) => {
    console.log(req.file)
    const { createWorker } = require("tesseract.js");

    const worker = await createWorker("eng");

    (async () => {
      const {
        data: { text }
      } = await worker.recognize(
        './uploads/' + req.file.filename
      );
      console.table(text);
      await worker.terminate();
      res.json(text)
    })();
  }),
];
