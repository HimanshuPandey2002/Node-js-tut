const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { docTitle: "Add Products", path: "/add-product" });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  // products.push({ title: req.body.title, price: req.body.price });
  products.push({ title: req.body.title, price: req.body.price });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
