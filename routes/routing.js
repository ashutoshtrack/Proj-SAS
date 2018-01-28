"use strict";

const router = require("express").Router();

const mongoose = require("mongoose");
const fs = require("fs");

let Grid = require("gridfs-stream");
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db);
  router.get("/", (req, res) => {
    res.send("Hello AshAMan !");
  });
  router.get("/img/:imgname", (req, res) => {
    let imgname = req.params.imgname;
    gfs.files
      .find({
        filename: imgname
      })
      .toArray((err, files) => {
        if (files.length === 0) {
          return res.status(404).send({
            message: "File not found"
          });
        }
        let data = [];
        let readstream = gfs.createReadStream({
          filename: files[0].filename
        });

        readstream.on("data", chunk => {
          data.push(chunk);
        });

        readstream.on("end", () => {
          data = Buffer.concat(data);
          let img =
            "data:application/pdf;base64," + Buffer(data).toString("base64");
          res.end(
            '<html><head><title>ResumeViewer</title></head><body><iframe src="' +
              img +
              '" style="width: 100%;height: 100%;border: none;"></iframe></body></html>'
          );
        });
        readstream.on("error", err => {
          // if theres an error, respond with a status of 500
          // responds should be sent, otherwise the users will be kept waiting
          // until Connection Time out
          res.status(500).send(err);
          console.log("An error occurred!", err);
        });
      });
  });
  router.post("/img", (req, res) => {
    console.log(req);
    let part = req.files.file;
    let writeStream = gfs.createWriteStream({
      filename: "xxx_" + part.name,
      mode: "w",
      content_type: part.mimetype
    });

    writeStream.on("close", file => {
      // checking for file
      if (!file) {
        res.status(400).send("No file received");
      }
      return res.status(200).send({
        message: "Success",
        file: file
      });
    });
    // using callbacks is important !
    // writeStream should end the operation once all data is written to the DB
    writeStream.write(part.data, () => {
      writeStream.end();
    });
  });
});

module.exports = router;
