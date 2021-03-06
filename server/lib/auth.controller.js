exports.google = (req, res) => {
  const io = req.app.get("io");
  const user = {
    name: req.user.displayName,
    photo: req.user.photos[0].value.replace(/sz=50/gi, "sz=250"),
  };
  io.in(req.session.socketID).emit("google", user);
  res.end();
};

exports.facebook = (req, res) => {
  console.log(req.user);
  const io = req.app.get("io");
  const { givenName, familyName } = req.user.name;
  const user = {
    name: `${givenName} ${familyName}`,
    photo: req.user.photos[0].value,
  };
  io.in(req.session.socketID).emit("facebook", user);
  res.end();
};

exports.github = (req, res) => {
  const io = req.app.get("io");
  const user = {
    name: req.user.username,
    photo: req.user.photos[0].value,
  };
  io.in(req.session.socketID).emit("github", user);
  res.end();
};
