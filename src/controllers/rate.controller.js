import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { getCurrentDateTime } from "../utils/utils.js";

const model = initModels(sequelize);

const createRateRes = async (req, res) => {
  try {
    const { userId, resId, rate } = req.body;
    if (!resId || !userId || !rate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingRateRes = await model.rate_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    if (existingRateRes) {
      return res
        .status(400)
        .json({ error: "You have already rated this restaurant" });
    }

    const newRateRes = await model.rate_res.create({
      user_id: userId,
      res_id: resId,
      amount: rate,
      date_rate: getCurrentDateTime(),
    });
    res.status(201).json(newRateRes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

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

export { getRatesByResId, getRatesByUserId, createRateRes };
