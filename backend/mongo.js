var mongoose = require("mongoose");

let docker = false;
let mongo_url = "mongodb://localhost:27017/usersdb";

if (docker) {
  mongo_url = "mongodb://mongo:27017/usersdb";
}

var User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      username: String,
      password: String,
    },
    { timestamps: true }
  )
);

User.deleteMany({}, () => {});

var connectWithRetry = function () {
  return mongoose.connect(mongo_url, (err) => {
    if (err) {
      console.error(
        "Failed to connect to mongo on startup - retrying in 5 sec",
        err
      );
      setTimeout(connectWithRetry, 5000);
    }
  });
};

exports.mongoMigration = function () {
  connectWithRetry();
  console.log("Mongo connection succesful");
  mongoose.connection.on("open", function () {
    mongoose.connection.db.dropDatabase();
    User.create(
      {
        username: "Jahor",
        password: "qwerty",
      },
      function (err) {
        if (err) console.error("Failed to create start user", err);
      }
    );
  });
};

exports.getUsers = async (req, res, next) => {
  await User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
};

exports.getUserById = async (req, res, next) => {
  await User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

exports.postUser = async (req, res, next) => {
  await User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

exports.updateUser = async (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

exports.deleteUser = async (req, res, next) => {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
