const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require('./routers/users.routes')
const adminRoute=require('./routers/admin.routes')
const dotenv = require("dotenv");
dotenv.config();
app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:4200"],
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use('/api' , userRoute)
  app.use('/api/admin' , adminRoute)
  app.use('/file', express.static('file'));
  mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Mongodb Server Connected"))
  .catch(() => console.log("Server Not Connected"));

app.listen(4000, () => console.log("Server Conected"));