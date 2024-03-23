import express from "express";




//router

const router = express.Router();

router.route("/").post(createUser);

export default router;
