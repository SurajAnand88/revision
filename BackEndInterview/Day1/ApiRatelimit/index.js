const express = require("express");
const limiter = require("express-rate-limit");

const app = express();
const limit = limiter.rateLimit({
  max: 10,
  windowMs: 10000,
});

const PORT = process.env.PORT || 3000;

app.get("/", limit, (req, res) => {
  console.log(req.ip);
  res.send("hello world");
});

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
