import dbConnect from "../../../db/lib/dbConnect";
import Code from "../../../db/models/CodeData";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
  const {
    query: { pasteId },
    method,
  } = req;
  await dbConnect();
  switch (method) {
    // case "GET" /* Get a model by its ID */:
    //   try {
    //     const pet = await Code.findById(pasteId);
    //     if (!pet) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: pet });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    case "GET" /* Get a model by its pasteId */:
      try {
        const query = Code.where({ pasteId: pasteId });
        query.findOne((err, code) => {
          if (err) res.status(400).json({ success: false });
          if (res) res.status(200).json({ success: true, data: code });
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const pet = await Code.findByIdAndUpdate(pasteId, req.body, {
          new: true,
          runValidators: true,
        });
        if (!pet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: pet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedPet = await Code.deleteOne({ _id: pasteId });
        if (!deletedPet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        let code = req.body;
        let newCode = new Code({
          title: code.title,
          author: code.author,
          language: code.language,
          code: code.code,
          expiresAt: code.expire,
          pasteId: nanoid(8),
        });
        await newCode.save();
        return res
          .status(201)
          .json({ success: true, pasteId: newCode.pasteId });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
