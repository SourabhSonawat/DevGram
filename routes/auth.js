import express from "express";

const router = express.Router();

router.post("/signup", createAccount);

export default router;
