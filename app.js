const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = parseInt(process.env.PORT) || process.argv[2] || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://programmernazmul1:nCKoYQvLsjZ1zzto@cluster0.awm5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Root Route
app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
