import path from "path";
import express from "express";
import apiRouter from "./routes.mjs";
import cors from "cors";
const app = express();

// let p = path.join(__dirname, "../public");
// console.log(p);
app.use(cors({ origin: true }));
app.use(express.static("http://localhost:9900"));
app.use(express.json());
app.use(apiRouter);

const port = 9900;

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
