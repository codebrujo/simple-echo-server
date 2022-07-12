import express from 'express';
import * as controller from '../../controllers/v1/echo.controller';

const router = express.Router();

router
    .route('/')
    .get(controller.getResponse)
    .post(controller.postResponse)
    .put(controller.putResponse)
    .patch(controller.patchResponse)
    .delete(controller.deleteResponse);

export default router;