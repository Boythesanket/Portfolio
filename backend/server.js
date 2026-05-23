import express from "express";
import { transporter } from "./utils/nodeMailer.js";
import { mailTemplate } from "./utils/mailTemplate.js";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { email, name, description } = req.body;

    if (!name || !email || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Portfolio Contact",
      html: mailTemplate(name, email, description),
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server Connected!");
});
