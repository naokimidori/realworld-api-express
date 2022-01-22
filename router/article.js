const express = require('express')
const articlesController = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

const router = express.Router()

// 获取文章列表
router.get('/articles', articlesController.getArticles)

// 获取关注的文章列表
router.get('/articles/feed', articlesController.getFeedArticles)

// 获取单个文章详情
router.get(
  '/articles/:articleId',
  articleValidator.getArticle,
  articlesController.getArticle
)

// 创建文章
router.post(
  '/articles',
  auth,
  articleValidator.createArticle,
  articlesController.createArticle
)

// 更新文章
router.put(
  '/articles/:articleId',
  auth,
  articleValidator.updateArticle,
  articlesController.updateArticle
)
 
// 删除文章
router.delete('/articles/:articleId', articlesController.deleteArticle)

// 创建文章评论
router.post('/articles/:articleId/comments', articlesController.createComment)

// 获取文章评论
router.get('/articles/:articleId/comments', articlesController.getComments)

// 删除评论
router.delete(
  '/articles/:articleId/comments/:id',
  articlesController.deleteComment
)

// 喜欢文章
router.post('/articles/:articleId/favorite', articlesController.favoriteArticle)

// 取消喜欢文章
router.delete(
  '/articles/:articleId/favorite',
  articlesController.unfavoriteArticle
)

module.exports = router
