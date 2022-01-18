const express = require('express')
const articlesController = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

const router = express.Router()

// 获取文章列表
router.get('/articles', articlesController.getArticles)

// 获取关注的文章列表
router.get('/articles/feed', articlesController.getFeedArticles)

// 获取打单个文章详情
router.get('/articles/:slug', articlesController.getArticle)

// 创建文章
router.post('/articles', auth, articleValidator.createArticle, articlesController.createArticle)

// 更新文章
router.put('/articles/:slug', articlesController.updateArticle)

// 删除文章
router.delete('/articles/:slug', articlesController.deleteArticle)

// 创建文章评论
router.post('/articles/:slug/comments', articlesController.createComment)

// 获取文章评论
router.get('/articles/:slug/comments', articlesController.getComments)

// 删除评论
router.delete('/articles/:slug/comments/:id', articlesController.deleteComment)

// 喜欢文章
router.post('/articles/:slug/favorite', articlesController.favoriteArticle)

// 取消喜欢文章
router.delete('/articles/:slug/favorite', articlesController.unfavoriteArticle)

module.exports = router
