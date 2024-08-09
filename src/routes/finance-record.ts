import express, { Request, Response } from "express";

const router = express.Router();

router.get("/getAllByUserID/:id", (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
