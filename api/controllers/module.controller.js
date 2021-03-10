const Phase = require('../models/Phase');
const Schedule = require('../models/Schedule');

const addModule = async (req, res) => {
  const { titleSpec, moduleTitle, userId, curatorId } = req.body;

  try {
    const phase = await Phase.create({
      titleSpec: titleSpec,
      title: moduleTitle,
      userId: userId,
      curatorId
    });
    return res.json(phase);
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
        title: titleModule,
      }
    }, { new: true }).lean();
    // const schedule = await Schedule.Update({ phaseId: phase._id }, {
    //   $set: {
    //     phaseTitle: phase.title,
    //   }
    // });

    return res.json(phase);
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
  console.log(id)
  try {
    const phase = await Phase.findById(id).lean();
    const schedule = await Schedule.find({ phaseId: id });
    return res.json({ phase, schedule });
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to module' });
  }
};

const getModuleAll = async (req, res) => {
  try {
    const phase = await Phase.find({ status: 1 }).lean();
    return res.json(phase);
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to module' });
  }
};

const getModuleStudent = async (req, res) => {
  try {
    const phase = await Phase.find({ groupSpec: req.body.groupSpec, isShow: true }).lean();
    const moduleStudent = await Promise.all(phase.map(async (el) => {
      const schedule = await Schedule.find({ phaseId: el.phaseId }).lean();
      return { phase: phase, schedule: schedule }
    }));

    return res.json({ moduleStudent });
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to groups' });
  }
};

const getModuleTeacher = async (req, res) => {
  try {
    const phase = await Phase.find({ curatorId: req.body.userId }).lean();
    return res.json(phase);
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to groups' });
  }
};

const addModuleArr = async (req, res) => {
  const { arrModule, titleSpec, userId } = req.body;
  try {
    const resPhase = await Promise.all(arrModule.map(async (el) => {
      return await Phase.create({
        titleSpec: titleSpec,
        title: el.groupTitle,
        userId: userId
      })
    }));

    return res.json({ titleSpec: titleSpec, phase: resPhase });
  } catch
  {
    return res.status(500).json({ mass: 'Error adding data to schedule' });
  }
};

module.exports = {
  addModule, delModule, updateModule, getModuleId, getModuleAll, getModuleStudent, getModuleTeacher, addModuleArr
};
