// routes/forumRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/forumController");

router.get("/", controller.getAllPosts);
router.post("/", controller.createPost);
router.patch("/:id/like", controller.likePost);
router.patch("/:id/view", controller.viewPost);
router.get("/stats", controller.getStats);

module.exports = router;