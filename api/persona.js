const { getZodiacSign, personas } = require('../server/utils/zodiac');

module.exports = (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Invalid JSON body' });
      }
    }

    const { date } = body || {};
    if (!date) {
      return res.status(400).json({ error: 'Date is required' });
    }

    const sign = getZodiacSign(date);
    const persona = personas[sign];

    return res.status(200).json({
      sign,
      ...persona,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to generate persona' });
  }
};

