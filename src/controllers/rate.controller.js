import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getRatesByResId = async (req, res) => {
  try {
    const { resId } = req.params;
    const rates = await model.rate_res.findAll({
      where: {
        res_id: resId,
      },
    });
    res.status(200).json(rates);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getRatesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const rates = await model.rate_res.findAll({
      where: {
        user_id: userId,
      },
    });
    res.status(200).json(rates);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { getRatesByResId, getRatesByUserId };
