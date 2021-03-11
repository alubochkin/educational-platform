const Phase = require('../models/Phase');
const Schedule = require('../models/Schedule');
const StorFile = require('../models/storFileInfo');
const addSchedule = async (req, res) => {

  const { arrSchedule, phaseId } = req.body;

  try {
    const phase = await Phase.findById(phaseId);
    const schedule = await Promise.all(arrSchedule.map(async (el) => {
      const sch = await Schedule.create({
        title: el,
        phaseTitle: phase.title,
        phaseId: phase._id
      });
      return sch;
    }));
    return res.json({ phaseId: phaseId, schedule: schedule });
  } catch
  {
    return res.status(500).json({ mass: 'Error adding data to schedule' });
  }
};
const updateSchedule = async (req, res) => {
  const { scheduleId, titleSchedule } = req.body;
  try {
    const schedule = await Schedule.findOneAndUpdate({ _id: scheduleId }, {
      $set: {
        titleSchedule: titleSchedule,
      }
    }, { returnOriginal: false }).lean();
    return res.json({
      moduleId: schedule.id,
      titleModule: schedule.title
    });
  } catch
  {
    return res.status(500).json({ mass: 'Error updating data to schedule' });
  }
};
const delSchedule = async (req, res) => {
  const { scheduleId } = req.body;
  try {
    const schedule = await Phase.Update({ _id: scheduleId }, {
      $set: {
        status: 0,
      }
    });
    return res.json({ moduleId: schedule._id });
  } catch
  {
    return res.status(500).json({ mass: 'Error deleting data to schedule' });
  }
};
const getScheduleId = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id).lean();
    return res.json(schedule);
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to schedule' });
  }
};
const getScheduleAll = async (req, res) => {
  try {
    const schedules = await Schedule.find({ status: 1 });
    return res.json(schedules);
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to schedule' });
  }
};
const getScheduleFile = async (req, res) => {
  try {
    const { scheduleId } = req.body;
    const files = await StorFile.find({ schId: scheduleId }).select('_id', 'path', 'originalname', 'size').lean();
    return res.json({ files });
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to schedule File' });
  }
};
module.exports = {
  addSchedule, delSchedule, updateSchedule, getScheduleId, getScheduleAll, getScheduleFile
};
