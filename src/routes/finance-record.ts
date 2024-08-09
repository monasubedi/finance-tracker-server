import express, { Request, Response } from "express";
import FinancialRecordModel from "../models/finance-record";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const records = await FinancialRecordModel.find({ userId });
    if (records.length === 0) {
      return res.status(404).send("No records with this id.");
    }
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const financeRecordBody = req.body;
    const newRequestBody = new FinancialRecordModel(financeRecordBody);
    const savedRecord = await newRequestBody.save();
    if (savedRecord) {
      return res.status(201).send(savedRecord);
    } else {
      return res.status(400).send("Error in creating a new record.");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const record = req.body;
  try {
    const updatedRecord = await FinancialRecordModel.findByIdAndUpdate(
      id,
      record,
      { new: true }
    );
    if (updatedRecord) {
      return res.status(200).send(updatedRecord);
    } else {
      return res.status(404).send("No record found with this id!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedRecord = await FinancialRecordModel.findByIdAndDelete(id);
    if (deletedRecord) {
      return res.status(200).send(deletedRecord);
    } else {
      return res.status(404).send("No record found with this id!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }
});

export default router;
