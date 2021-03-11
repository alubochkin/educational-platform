const { LowPriority } = require('@material-ui/icons');
const Notes = require('../models/Notes');

const addNewNotes = async (req, res) => {
  const { note, userId } = req.body;

  const newNotes = await Notes.create({ title: note.title, content: note.content, userId: userId });
  res.json(newNotes);
}
const getNotes = async (req, res) => {
  const { userId } = req.body;
  const notes = await Notes.find({ userId: userId }).lean();
  return res.json(notes);
}
const delNotes = async (req, res) => {
  const { id } = req.params;
  const result = await Notes.deleteOne({ _id: id })
  return res.json(result);
}
const updateNotes = async (req, res) => {
  const { _id } = req.body;
  const note = await Notes.findById(_id);
  const title = (req.body.title) ? req.body.title : note.title;
  const content = (req.body.content) ? req.body.content : note.content;
  const result = await Notes.findOneAndUpdate({ _id: _id }, { $set: { title: title, content: content } }, { upsert: true, new: true });
  return res.json(result);
}

module.exports = { addNewNotes, getNotes, delNotes, updateNotes };
