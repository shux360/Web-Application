exports.get404 = (req, res, next) => {
  res
    .status(404)
    .render("404-error", { pageTitle: "Page Not Found", path: "/404-error" });
};
