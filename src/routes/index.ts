import express from 'express';
import TweetRouter from './TweetRouter';

const router = express.Router();

router.get('/', (req, res) => { res.render('home'); });

router.use(TweetRouter);

export default router;
