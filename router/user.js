const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

// 登录
router.post('/users/login', userController.login)

// 注册
router.post('/users', userController.register)

// 获取当前用户
router.get('/user', userController.getCurrentUser)

// 更新用户信息
router.put('/user', userController.updateCurrentUser)

module.exports = router
