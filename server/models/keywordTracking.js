import mongoose from "mongoose";

const rankEntrySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    position: { type: Number, default: null },
    page: { type: String, default: "" },
    snipped: { type: String, default: "" }
}, {_id: false})

const keywordTrackingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    keyword: { type: String, required: true, trim: true, lowercase: true },
    url: { type: String, required: true, trim: true },
    domain: { type: Number, default: null },
    currentPage: { type: Number, default: null },
    positionChange: { type: Number, default: 0 },
    rankHistory: [],
    competitors: [],
    active: { type: Boolean, default: true },
    lastChecked: { type: Date, default: null },
    status: { type: String, enum: ["pending", "checking", "completed", "failed"], 
        default: "pending" },
}, {timestamps: true})