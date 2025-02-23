import express from "express";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
