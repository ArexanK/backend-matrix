const data = require("../model/data.js");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const getHomePage = (req, res) => {
  res.status(200).send(data);
};

const createNewUser = (req, res) => {
  const { name, createdAt, message } = req.body;

  if (!name || !createdAt || !message) {
   
    return res.status(400).json({ error: "required name and post" });
  } else {
    const id = uuidv4();
    const newUser = { id, name, createdAt, message };

    data.push(newUser);
    return res.status(201).json({ msg: "new user created" });
  }
};

const getUserId = (req, res) => {
  const id = req.params.id;

  for (const dataId of data) {
    if (dataId.id == id) {
      res.status(200);
      res.json(dataId);
      return;
    }
  }
  res.status(404).send({ error: "data does not exist" });
};

module.exports = {
  getHomePage,
  createNewUser,
  getUserId,
};
