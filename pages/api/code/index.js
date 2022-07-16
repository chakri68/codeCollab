import dbConnect from "../../../db/lib/dbConnect";
import Code from "../../../db/models/CodeData";

export default async function handler(req, res) {
  const {
    query: { pasteId },
    method,
  } = req;
  await dbConnect();
  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const pet = await Code.findById(pasteId);
        if (!pet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: pet });
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
        });
        await newCode.save();
        console.log("Saved!");
        return res.status(201).json({ success: true, id: newCode._id });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
