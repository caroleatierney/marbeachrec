// ==================================================
// =================  Dependencies ==================
// ==================================================
const express = require("express");
const postgres = require("./postgres.js");
// const axios = require("axios");
// const morgan = require("morgan");

// ==================================================
// =================  CONFIGURATION =================
// ==================================================
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
// morgan("tiny");

// ==================================================
// ================== MIDDLEWARE ====================
// ==================================================
app.use(express.json());
app.use(express.static('public'))

// ==================================================
// ================== CONTROLLERS ===================
// ==================================================
const beachesController = require('./controllers/beaches.js');
app.use('/beaches', beachesController);

// ==================================================
// ====================  POSTGRES ===================
// ==================================================
postgres.connect();

// ==================================================
// ====================  LISTENER ===================
// ==================================================
app.listen(process.env.PORT || 3000, () => {
  console.log("server listening on port", PORT);
})
