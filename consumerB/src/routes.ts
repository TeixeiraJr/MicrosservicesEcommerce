import express from 'express';

const router = express.Router();

router.get('/sendNotification', (req, res) => {res.json('ok consumer B')});

export default router;