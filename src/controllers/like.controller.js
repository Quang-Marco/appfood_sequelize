import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getLikesByResId = async (req, res) => {
  try {
    const { resId } = req.params;
    const likes = await model.like_res.findAll({
      where: {
        res_id: resId,
      },
    });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getLikesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const likes = await model.like_res.findAll({
      where: {
        user_id: userId,
      },
    });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { getLikesByResId, getLikesByUserId };
