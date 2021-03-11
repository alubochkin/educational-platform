const Notes = require('../models/Notes');

const addNewNotes = async (req, res) => {
  const { title, content, userId } = req.body;
  const newNotes = await Notes.create({ title: title, content: content, userId: userId });
  return res.json(newNotes);
}
const getNotes = async (req, res) => {
  const { userId } = req.body;
  const notes = await Notes.find({ userId: userId }).lean();
  return res.json(notes);
}
const delNotes = async (req, res) => {
  const { _id } = req.params;
  const result = await Notes.deleteOne({ _id: _id })
  return res.json(result);
}
const updateNotes = async (req, res) => {
  const { _id, title, content } = req.body;
  const result = await Notes.updateOne({ _id: _id }, { title: title, content: content });
  return res.json(result);
}

module.exports = { addNewNotes, getNotes, delNotes, updateNotes };
