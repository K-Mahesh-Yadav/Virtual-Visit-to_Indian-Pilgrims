const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const cors = require("cors");
const Rschema = require("./models/model1");


const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/piligrims").then(() => {
  console.log("DB connected...");
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/getregister", async (req, res) => {
  try {
    return res.json(await Rschema.find());
  } catch (err) {
    console.log(err);
  }
});

app.post("/postregister", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "assignmentsproject9@gmail.com",
      pass: "mtbikanioizdiavh",
    },
  });

  const mailoption = {
    form: "assignmentsproject9@gmail.com",
    to: email,
    subject: "Piligrims Virtual Visit",
    // text: "Hello , You have sucessfully Registered on my project",
    html:
      `<div>
      <h1>Mail Verification</h1>
      <p>HELLO USER !!</p>
      <p>Your trying to login in pligrims Virtual Visit website . This is to check whether it is you </p>
      <i>Please click on confirm Mail to complete Your registration</i><br/>
      <b>Not you , click on quit registration to stop the registration</b>
      <br/>
      <a href="http://localhost:3000/Login">
    <button style="background-color: green; color: white; padding: 15px 32px;" >
      Confirm Mail
    </button>
      <a href="http://localhost:3000">
      <button style="background-color: green; color: white; padding: 15px 32px;">
        Not Me
      </button>
    </div>`,
  };

  transporter.sendMail(mailoption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent " + info.response);
    }
  });
    try {
      const newData = new Rschema({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      });
      await newData.save();
      return res.json(await Rschema.find());
    } catch (err) {
      console.log(err);
    }
});

app.listen(5000, () => {
  console.log("server running...");
});
