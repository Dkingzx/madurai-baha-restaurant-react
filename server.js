import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/reservations', (req, res) => {
  const { name, phone, date, time, guests, seating, notes } = req.body;
  console.log('New Reservation Received:', { name, phone, date, time, guests, seating, notes });
  res.status(201).json({ success: true, message: 'Table reservation confirmed successfully!' });
});

app.post('/api/orders', (req, res) => {
  const { items, total } = req.body;
  console.log('New Order Received:', { items, total });
  res.status(201).json({ success: true, message: 'Food order placed successfully!' });
});

app.get('/api/menu', (_req, res) => {
  res.json({ success: true, message: 'Madurai Basha Restaurant API is active.' });
});

app.listen(PORT, () => {
  console.log(`Madurai Basha Express Server running on http://localhost:${PORT}`);
});
