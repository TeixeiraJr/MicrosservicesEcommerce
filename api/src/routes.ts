import express from 'express';
import PurchaseController from './controllers/Purchase';
import {purchaseStoreValidate} from './validations/purchase';
import {body} from 'express-validator'

const router = express.Router();

router.post('/purchase', purchaseStoreValidate, PurchaseController.receivePurchase);

export default router;