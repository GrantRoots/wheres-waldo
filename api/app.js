const express = require("express");
const cors = require("cors");

const checkRouter = require("./routes/check");
const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/check", checkRouter);

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(err.message);
});

app.listen(PORT);
