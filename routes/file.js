var express = require("express");
var router = express.Router();
var upload = require("../service/upload");
Module: multer;
var multer = require("multer");
var stotage = multer.diskStorage({
  destination: "fileprint/",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
var multerupload = multer({ storage: stotage });

router.get("/", (req, res, next) => {
  console.log("gettt");
  res.render("fileUpload");
});
router.post("/", multerupload.single("file"), upload.fileupload);

module.exports = router;
