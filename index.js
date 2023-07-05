const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(shopRoutes);
app.use("/admin", adminRoutes);
const PORT = process.env.PORT || 5000;
mongoConnect(() => {
  app.listen(5000, console.log(`The server is listen at ${PORT}`));
});
