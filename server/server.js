import http from 'http';
import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;



server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});