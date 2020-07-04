exports.authUser = async (req, res, next) => {
  try {
    res.json({ message: "Success" });
  } catch (e) {
    next(e);
  }
};
