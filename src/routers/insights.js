const express = require("express");
const axios = require("axios");
const url = "https://transactions.spokedev.xyz/transactions";
const router = express.Router();
const categoriesHandler = require("../handlers/categoriesHandler.js");

router.get("/categories", async (req, res, next) => {
  try {
    return axios
      .get(url)
      .then(response => {
        return categoriesHandler.format(response.data);
      })
      .then(result => {
        res.status(200).json(result);
      });
  } catch (err) {
    return next(err);
  }
});

router.get("/cashflow", async (req, res, next) => {
  try {
    res.status(501).json({ message: "Not Implemented" });
  } catch (err) {
    return next(err);
  }
});

router.get("/merchants", async (req, res, next) => {
  try {
    res.status(501).json({ message: "Not Implemented" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
