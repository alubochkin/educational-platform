const Group = require('../models/Group');
const Student = require('../models/Student');


const addGroup = async (req, res) => {
  console.log('создание новой группы $$$ req.body:', req.body);
  const { groupSpec, groupTitle, dateStart, dateFinish } = req.body.group;
  const userId = req.body.userId;
  try {
    const group = await Group.create({
      groupSpec: groupSpec,
      groupTitle: groupTitle,
      dateStart: Date(dateStart),
      dateFinish: Date(dateFinish),
      strDateStart: dateStart,
      strDateFinish: dateFinish,
      curatorId: userId,
      userId: userId
    });
    return res.json({
      _id: group.id,
      groupSpec: group.groupSpec,
      groupTitle: group.groupTitle,
      dateStart: group.dateStart,
      dateFinish: group.dateFinish,
      curatorId: group.curatorId,
      strDateStart: group.strDateStart,
      strDateFinish: group.strDateFinish
    });
  } catch
  {
    return res.status(500).json({ mass: 'Error adding data to groups' });
  }
};

const updateGroup = async (req, res) => {
  const { _id, groupSpec, groupTitle, dateStart, dateFinish, curatorId } = req.body.group;
  try {
    const group = await Group.findOneAndUpdate({ _id }, {
      $set: {
        groupSpec: groupSpec,
        groupTitle: groupTitle,
        dateStart: Date(dateStart),
        dateFinish: Date(dateFinish),
        strDateStart: dateStart,
        strDateFinish: dateFinish,
        curatorId
      }
    }, { returnOriginal: false }).lean();
    return res.json({
      groupId: group.id,
      groupSpec: group.groupSpec,
      groupTitle: group.groupTitle,
      dateStart: group.dateStart,
      dateFinish: group.dateFinish,
      strDateStart: group.strDateStart,
      strDateFinish: group.strDateFinish,
      curatorId
    });
  } catch
  {
    return res.status(500).json({ mass: 'Error updating data to groups' });
  }
};

const delGroup = async (req, res) => {
  const { groupId } = req.body;
  try {
    const group = await Group.findByIdAndRemove(groupId);
    return res.json(group);
  } catch
  {
    return res.status(500).json({ mass: 'Error deleting data to groups' });
  }
};
const getGroupId = async (req, res) => {
  const { id } = req.params;
  // для запроса преподавателя или админа по группе
  try {
    const group = await Group.findById(id).lean();
    const students = await Student.find({ groupId: id });
    return res.json({ group, students });
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to group' });
  }
};

const getGroupAll = async (req, res) => {
  const { userId, role } = req.body;
  try {
    if (role === 'admin') {
      const group = await Group.find().lean();
      return res.json(group);
    } else if (role === 'teacher') {
      const group = await Group.find({ curatorId: userId }).lean();
      return res.json(group);
    }
  } catch
  {
    return res.status(500).json({ mass: 'Error not find data to groups' });
  }
};

module.exports = {
  addGroup, delGroup, updateGroup, getGroupId, getGroupAll
};
