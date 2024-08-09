import { Router } from 'express';
import profileRouter from './profile.js';

const router = Router();

router.use('/profile', profileRouter);

// 404 route handler - must be the last handler
router.use((req, res, next) => {
  return res.status(404).render('error', { message: 'Page not found' });
});

export default router;
