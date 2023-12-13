// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Add routes in server.js

app.get("/photos", async (req, res) => {
  console.log("got request");
  try {
    const { category, page } = req.query;
    console.log(category);
    console.log(page);
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=9&page=${page}`
    );
    console.log(response.data.hits);
    res.send(response.data.hits);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
