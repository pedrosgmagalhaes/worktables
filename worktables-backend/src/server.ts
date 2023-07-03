// worktables-backend/src/server.ts

import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
dotenv.config();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
