const express = require('express');
const cors = require('cors');
const path = require('path');
const { getZodiacSign, personas } = require('./utils/zodiac');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoint
app.post('/api/persona', (req, res) => {
  try {
    const { date } = req.body;
    if (!date) {
      return res.status(400).json({ error: "Date is required" });
    }

    const sign = getZodiacSign(date);
    const persona = personas[sign];

    res.json({
      sign,
      ...persona
    });
  } catch (error) {
    console.error("Error generating persona:", error);
    res.status(500).json({ error: "Failed to generate persona" });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Assuming the client build is located in ../client/dist relative to this file
  // Adjust path as needed based on deployment structure
  const clientBuildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientBuildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
