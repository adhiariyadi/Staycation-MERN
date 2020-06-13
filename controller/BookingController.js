const Booking = require("../models/Booking");

module.exports = {
  index: async (req, res) => {
    try {
      const booking = await Booking.find().populate("memberId");
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/booking/index", {
        booking,
        alert,
        title: "Staycation | Booking",
        user: req.session.user,
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/booking");
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const booking = await Booking.findOne({ _id: id }).populate("memberId");
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/booking/detail", {
        booking,
        alert,
        title: "Staycation | Booking",
        user: req.session.user,
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/booking");
    }
  },
  confirmation: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findOne({ _id: id });
      booking.payments.status = "Accept";
      await booking.save();
      req.flash("alertMessage", "Success Confirmatin Pembayaran!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/booking/${id}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/booking/${id}`);
    }
  },
  reject: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findOne({ _id: id });
      booking.payments.status = "Reject";
      await booking.save();
      req.flash("alertMessage", "Success Reject Pembayaran!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/booking/${id}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/booking/${id}`);
    }
  },
};
