module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(400).send({ error: "You must login" });
  }
  next();
};
