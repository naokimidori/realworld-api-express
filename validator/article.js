const { body, param } = require('express-validator')
const validate = require('../middleware/validate')
const mongoose = require('mongoose')
const { Article, User } = require('../model')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空'),
])

exports.getArticle = validate([
  // param('articleId').custom(async value => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     return Promise.reject('文章ID类型错误')
  //   }
  // }),
  validate.isValidObjectId(['params'], 'articleId')
])

exports.updateArticle = [
  // 校验ID是否合法
  validate([
    validate.isValidObjectId(['params'], 'articleId')
  ]),
  // 校验文章是否存在
  async (req, res, next) => {
    const articleId = req.params.articleId
    const article = await Article.findById(articleId)
    if (!article) {
      return res.status(404).end()
    }
    req.article = article
    next()
  },
  // 校验是否是作者本人
  async (req, res, next) => {
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end()
    }
    next()
  }
]
