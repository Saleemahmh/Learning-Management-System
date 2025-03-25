require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use(cors());

app.use(express.json());

//Routes
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/course");
//const userRoutes = require("./routes/User");
app.use("/auth", authRoutes);
app.use("/auth", courseRoutes);
//app.use("/user", userRoutes);

//db connection
mongoose
  .connect(MONGO_URI, {
    dbName: "elearningwebsite",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
