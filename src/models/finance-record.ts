import mongoose from "mongoose";

interface FinanceRecord {
  userId: string;
  date: Date;
  amount: number;
  description: string;
  category: string;
  paymentMethod: string;
}

const financialRecordSchema = new mongoose.Schema<FinanceRecord>({
  userId: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
  amount: {
    required: true,
    type: Number,
  },
  description: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  paymentMethod: {
    required: true,
    type: String,
  },
});

const FinancialRecordModel = mongoose.model<FinanceRecord>(
  "FinancialRecord",
  financialRecordSchema
);

export default FinancialRecordModel;
