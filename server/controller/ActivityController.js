const Item = require("../models/Item");
const Activity = require("../models/Activity");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  create: async (req, res) => {
    const { name, type, itemId } = req.body;
    try {
      if (!req.file) {
        req.flash("alertMessage", "Image not found!");
        req.flash("alertStatus", "danger");
        res.redirect(`/admin/item/detail/${itemId}`);
      }
      const item = await Item.findOne({ _id: itemId });
      const activity = await Activity.create({
        name,
        type,
        imageUrl: `images/${req.file.filename}`,
        itemId: item._id,
      });
      item.activityId.push({ _id: activity._id });
      await item.save();
      req.flash("alertMessage", "Success Add Activity!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/detail/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${itemId}`);
    }
  },

  update: async (req, res) => {
    const { id, name, type, itemId } = req.body;
    try {
      const activity = await Activity.findOne({ _id: id });
      if (req.file != undefined) {
        await fs.unlink(path.join(`public/${activity.imageUrl}`));
        activity.imageUrl = `images/${req.file.filename}`;
      }
      activity.name = name;
      activity.type = type;
      await activity.save();
      req.flash("alertMessage", "Success Update Activity!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/detail/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${itemId}`);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const activity = await Activity.findOne({ _id: id });
    try {
      const item = await Item.findOne({ _id: activity.itemId }).populate(
        "activityId"
      );
      for (let i = 0; i < item.activityId.length; i++) {
        if (item.activityId[i]._id.toString() === activity._id.toString()) {
          item.activityId.pull({ _id: activity._id });
          await item.save();
        }
      }
      await fs.unlink(path.join(`public/${activity.imageUrl}`));
      await activity.remove();
      req.flash("alertMessage", "Success Delete Activity!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/detail/${activity.itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${activity.itemId}`);
    }
  },
};
