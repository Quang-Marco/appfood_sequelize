import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { getCurrentDateTime } from "../utils/utils.js";

const model = initModels(sequelize);

const createLikeRes = async (req, res) => {
  try {
    const { userId, resId } = req.params;

    const existingLike = await model.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    if (existingLike) {
      return res
        .status(409)
        .json({ message: "You have already liked this restaurant" });
    }

    const newLike = await model.like_res.create({
      user_id: userId,
      res_id: resId,
      date_like: getCurrentDateTime(),
    });
    res.status(201).json(newLike);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteLikeRes = async (req, res) => {
  try {
    const { userId, resId } = req.params;

    const existingLike = await model.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    if (!existingLike) {
      return res
        .status(404)
        .json({ message: "You have not liked this restaurant" });
    }

    await model.like_res.destroy({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

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

export { getLikesByResId, getLikesByUserId, createLikeRes, deleteLikeRes };
