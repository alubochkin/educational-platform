const Lection = require('../models/Lection');

const addLection = async (req, res) => {

  const { groupId, phaseId, phaseTitle, schId, schTitle, week, dayWeek, dayWeekText, task } = req.body;
  try {
    const lesson = await Lection.create({
      groupId: groupId,
      phaseId: phaseId,
      phaseTitle: phaseTitle,
      schId: schId,
      schTitle: schTitle,
      week: week,
      dayWeek: dayWeek,
      dayWeekText: dayWeekText,
      task: task
    });

    return res.json(lesson);
  } catch
  {
    return res.status(500).json({ mass: 'Error adding data to lesson' });
  }
};
const getAllLection = async (req, res) => {

  const { groupId } = req.body;
  try {
    const lesson = await Lection.find({
      groupId: groupId,
    }).lean();

    return res.json(lesson);
  } catch
  {
    return res.status(500).json({ mass: 'Error getting data to lesson' });
  }
};

const getPhaseLection = async (req, res) => {

  const { phaseId, groupId } = req.body;
  try {
    const lesson = await Lection.find({
      groupId: groupId,
      phaseId: phaseId,
    }).lean();

    return res.json(lesson);
  } catch
  {
    return res.status(500).json({ mass: 'Error getting data to lesson' });
  }
};

const getWeekLection = async (req, res) => {

  const { phaseId, week, groupId } = req.body;
  try {
    const lesson = await Lection.find({
      groupId: groupId,
      phaseId: phaseId,
      week: week
    }).lean();

    return res.json(lesson);
  } catch
  {
    return res.status(500).json({ mass: 'Error getting data to lesson' });
  }
};
module.exports = {
  addLection, getWeekLection, getAllLection, getPhaseLection
};
