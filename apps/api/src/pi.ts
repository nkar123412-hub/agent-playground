import { Router, Request, Response } from 'express';

const router = Router();

// Function to calculate PI using the Leibniz formula (simple, but converges slowly)
function calculatePiLeibniz(iterations: number = 1000000): number {
  let pi = 0;
  let sign = 1;
  for (let i = 0; i < iterations; i++) {
    pi += sign * (1 / (2 * i + 1));
    sign *= -1;
  }
  return pi * 4;
}

// API route for PI calculation
router.get('/', (req: Request, res: Response) => {
  const iterations = parseInt(req.query.iterations as string) || 1000000; // Default iterations
  
  if (isNaN(iterations) || iterations <= 0) {
    return res.status(400).json({ error: 'Iterations must be a positive number.' });
  }

  try {
    const piValue = calculatePiLeibniz(iterations);
    res.json({
      iterations,
      pi: piValue
    });
  } catch (error: any) {
    console.error('Error calculating PI:', error.message);
    res.status(500).json({ error: 'Failed to calculate PI.' });
  }
});

export default router;
