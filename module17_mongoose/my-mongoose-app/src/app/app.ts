import express, { Application, Request, Response } from "express";
import { Schema } from "mongoose";

const app: Application = express();

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model("Note" , noteSchema);


app.post('/create-note',async(req: Request, res: Response)=>{

const myNote =new Note({

  title : 'learning mongoose',
  content: 'im learning mongoose'
})
await myNote.save()

res.status(201).json({
success: true,
message: "note  created successfully",
note: myNote


})
  
})
app.get("/", (req: Request, res: Response) => {
  res.send("welcome to Todoaaaapp");
});

export default app;
