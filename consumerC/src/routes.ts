import express from 'express';

const router = express.Router();

router.get('/deliveryOrder', (req, res) => {res.json('ok consumer C')});

export default router;