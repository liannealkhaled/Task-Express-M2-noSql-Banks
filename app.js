let accounts = require("./accounts");
const express = require("express");
const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");
const connectDb = require("./database");
require("dotenv").config();

app.use(express.json());
app.use("/accounts", accountsRoutes);

connectDb();

app.listen(process.env.PORT, () => {
  console.log("The application is running on localhost:8000");
});
