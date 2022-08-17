import express from 'express';
const router = express.Router();

router.post('/purchase', (req, res) => {
    res.send('Request sucessfully')
});

export default router;