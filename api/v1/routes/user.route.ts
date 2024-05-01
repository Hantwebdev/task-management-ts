import { Router } from "express";

import * as controller from "../controller/user.controller";

import * as authMiddleware from "../middleware/auth.middleware";

const router: Router = Router();

router.post('/register', controller.register);

router.post('/login', controller.login);

router.get('/detail', authMiddleware.requireAuth, controller.detail);

export const userRoutes: Router = router; 