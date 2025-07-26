const express = require('express');
const { register, login, verifyToken } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
   res.json({ message: 'Welcome to the Auth API!' });
});
router.post('/api/auth/register', register);
router.post('/api/auth/login', login);
router.get('/api/auth/verify', authMiddleware, verifyToken);

module.exports = router;