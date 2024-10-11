import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const createOrder = async (req, res) => {
  try {
    const { userId, foodId, amount, discountCode = "" } = req.body;
    if (!userId || !foodId || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingOrder = await model.orders.findOne({
      where: {
        user_id: userId,
        food_id: foodId,
      },
    });
    if (existingOrder) {
      return res
        .status(400)
        .json({ error: "You have already ordered for this food" });
    }

    const order = await model.orders.create({
      user_id: userId,
      food_id: foodId,
      amount,
      discount_code: discountCode,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { createOrder };
