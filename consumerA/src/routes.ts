import express from 'express';

const router = express.Router();

router.get('/finishSale', (req, res) => {res.json('ok consumer A')});

export default router;