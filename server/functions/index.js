const admin = require("firebase-admin");
const functions = require("firebase-functions");
require("dotenv").config();

const serviceAccount = require("./serviceAccountKey.json");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

// api endpoints

app.get("/", (req, res) => {
  return res.send("Welcome to the api");
});

const userRoute = require("./routes/user.jsx");
app.use("/api/user", userRoute);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://restourantdb-default-rtdb.firebaseio.com",
});

exports.app = functions.https.onRequest(app);
