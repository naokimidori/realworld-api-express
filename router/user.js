const express = require('express')
const userController = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()

// 登录
router.post('/users/login', userValidator.login, userController.login)

// 注册
router.post('/users', userValidator.register, userController.register)

// 获取当前用户
router.get('/user', auth, userController.getCurrentUser)

// 更新用户信息
router.put('/user', auth, userController.updateCurrentUser)

module.exports = router
