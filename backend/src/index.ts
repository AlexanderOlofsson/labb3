import express from "express";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const sofa = { id: 1, name: "Sofa", base_color: "#ffffff" };

const customizations: { id: number; customColor: string }[] = [];

// GET sofa info
app.get("/api/sofa", (req, res) => {
  res.json(sofa);
});

// POST
app.post("/api/customizations", (req, res) => {
  const { customColor } = req.body;

  const newCustomization = {
    id: customizations.length + 1,
    customColor,
  };

  customizations.push(newCustomization);

  res.status(201).json({ message: "Customization added!", data: newCustomization });
});

// Gett all customs
app.get("/api/customizations", (req, res) => {
  res.json(customizations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
