const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Allows parsing of JSON requests

// ✅ Root route to check if server is running
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Import employee routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
