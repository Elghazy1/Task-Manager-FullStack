const getAllTasks = (req, res) => {
  res.send("Get all tasks");
  //const tasks = await Task.find({})
  //res.status(200).json({ tasks })
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTasks = (req, res) => {
  res.send("Update task");
};

const deleteTasks = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
