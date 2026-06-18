import express, { Request, Response } from 'express';
import usersRouter from './routes/users';
import piRouter from './pi'; // Assuming pi.ts exports a router

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "taskflow-api" });
});

// Use the PI calculation routes
app.use('/pi', piRouter);

// Use the user routes
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`TaskFlow API listening on port ${port}`);
});
