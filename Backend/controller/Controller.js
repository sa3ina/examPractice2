const Model = require("../modules/Module");
const getall = async (req, res) => {
  const posts = await Model.find();
  res.send(posts);
};
const getbyId = async (req, res) => {
  const posts = await Model.findOne({ id: req.params.id });
  res.send(posts);
};
const deletebyId = async (req, res) => {
  await Model.deleteOne({ id: req.params.id });
  res.send();
};
const postNew = async (req, res) => {
  const post = await Model(req.body);
  await post.save();
  res.send(post);
};
module.exports = { getall, getbyId, deletebyId, postNew };
