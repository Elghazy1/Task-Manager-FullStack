const mongoose = require("mongoose");

const cnxString =
  "mongodb+srv://yazid:yazid_01@nodeexpresseproject.n56yl.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(cnxString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB !"))
  .catch((err) => console.log(err));
