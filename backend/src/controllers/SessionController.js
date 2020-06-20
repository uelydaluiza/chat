const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { email, password, type } = request.body;

    var user = await connection(type)
      .where("email", email)
      .where("password", password)
      .select("*")
      .first();

    if (!user) {
      return response
        .status(400)
        .json({ error: "No USER founded with this email and password" });
    }

    return response.json(user);
  },
};
