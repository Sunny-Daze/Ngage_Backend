import express from 'express';

import { userRegister, userLogin } from '../contoller/user-controller.js'

const router = express.Router();

router.post('/register', userRegister);

router.post('/login', userLogin);

export default router;