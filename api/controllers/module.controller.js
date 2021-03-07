const Phase = require('../models/Phase');
const Schedule = require('../models/Schedule');

const addModule = async (req, res) => {
  const { titleSpec, groupTitle, userId } = req.body;

  try {
    const phase = await Phase.create({
      titleSpec: titleSpec,
      title: groupTitle,

    });
    return res.json({
      moduleId: phase.id,
      titleSpec: phase.titleSpec,
      titleModule: phase.title
    });
  } catch
  {
    return res.status(500).json({ mass: 'Error adding data to module' });
  }
};

const updateModule = async (req, res) => {
  const { moduleId, titleModule } = req.body;
  try {
    const phase = await Phase.findOneAndUpdate({ _id: moduleId }, {
      $set: {
        titleModule: titleModule,
      }
    }, { returnOriginal: false }).lean();
    const schedule = await Schedule.Update({ phaseId: phase._id }, {
      $set: {
        phaseTitle: phase.title,
      }
    });

    return res.json({
      moduleId: phase.id,
      titleModule: phase.title,
      countSchedule: schedule.n
    });
  } catch
  {
    return res.status(500).json({ mass: 'Error updating data to module' });
  }
};

const delModule = async (req, res) => {
  const { moduleId } = req.body;
  try {
    const phase = await Phase.Update({ _id: moduleId }, {
      $set: {
        status: 0,
      }
    });
    return res.json({ moduleId: phase._id });
  } catch
  {
    return res.status(500).json({ mass: 'Error deleting data to module' });
  }
};
const getModuleId = async (req, res) => {
  const { id } = req.params;
  try {
    const phase = await Phase.findById(id).lean();
    return res.json(phase);
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to module' });
  }
};

const getModuleAll = async (req, res) => {
  try {
    const group = await Phase.find({ status: 1 }).lean();
    return res.json(group);
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to groups' });
  }
};

module.exports = {
  addModule, delModule, updateModule, getModuleId, getModuleAll
};
