const express = require('express')
const profileController = require('../controller/profile')

const router = express.Router()

// 获取用户资料
router.get('/profiles/:username', profileController.getProfiles)

// 关注用户
router.post('/profiles/:username/follow', profileController.followUser)

// 取消关注用户
router.delete('/profiles/:username/follow', profileController.unfollowUser)

module.exports = router
