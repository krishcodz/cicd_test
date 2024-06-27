const express = require("express");
const path = require("path");
const app = express();
const _dirname = path.dirname("");
app.use(express.static(path.join(_dirname, "../client/build")));
app.get("/", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
