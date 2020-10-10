const { fetchHtml } = require("../services");

exports.get = async (req, res, next) => {
  const response = await fetchHtml(req.query.url);
  return res.json(response);
};
