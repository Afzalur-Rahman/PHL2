"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/library";
const PORT = process.env.PORT || 5000;
// Connect to DB once (works both locally and on Vercel)
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log("connected to mongodb database");
    if (!process.env.VERCEL) {
        app_1.default.listen(PORT, () => {
            console.log(`the server is running on port : ${PORT}`);
        });
    }
})
    .catch((err) => {
    console.error("Connection failed to DB", err);
});
// On Vercel, export the Express app as the handler
exports.default = app_1.default;
