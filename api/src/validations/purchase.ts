import { body } from "express-validator";

export const purchaseStoreValidate = [
    body('customer.name')
        .escape()
        .not().isEmpty()
        .withMessage('Nome obrigatório'),
    body('customer.document')
        .escape()
        .exists()
        .isLength({min:11, max:11})
        .withMessage('Número de documento inválido, deve ter 11 caracteres'),
    body('items.*.id')
        .exists()
        .withMessage('Id do produto inválido'),
    body('items.*.amount')
        .exists()
        .isNumeric()
        .withMessage('Quantidade do produto inválida'),
    body('address.zip_code')
        .exists()
        .isLength({min:8,max:8})
        .withMessage('CEP inválido'),
    body('address.house_number')
        .exists()
        .withMessage('Número da residência obrigatório'),
    body('address.street')
        .exists()
        .withMessage('Nome da rua obrigatório'),
    body('address.neighborhood')
        .exists()
        .withMessage('Bairro obrigatório'),
    body('address.city')
        .exists()
        .withMessage('Cidade obrigatória'),
    body('address.uf')
        .exists()
        .isLength({min:2,max:2})
        .withMessage('UF obrigatória'),

];