const { Article } = require('../model')

exports.getArticles = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0 } = req.query
    const articles = await Article.find()
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
    const articlesCount = await Article.countDocuments()
    res.status(200).json({
      articles,
      articlesCount,
    })
  } catch (err) {
    next(err)
  }
}

exports.getFeedArticles = async (req, res, next) => {
  try {
    res.send('getFeedArticles')
  } catch (err) {
    next(err)
  }
}

exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate(
      'author'
    )
    if (!article) {
      return res.status(404).end()
    }
    res.status(200).json({ article })
  } catch (err) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article)
    article.author = req.user._id
    article.populate('author') // 根据userId填充author内容
    await article.save()
    res.status(201).json({
      article,
    })
  } catch (err) {
    next(err)
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
    res.send('updateArticle')
  } catch (err) {
    next(err)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    res.send('deleteArticle')
  } catch (err) {
    next(err)
  }
}

exports.createComment = async (req, res, next) => {
  try {
    res.send('createComment')
  } catch (err) {
    next(err)
  }
}

exports.getComments = async (req, res, next) => {
  try {
    res.send('getComments')
  } catch (err) {
    next(err)
  }
}

exports.deleteComment = async (req, res, next) => {
  try {
    res.send('deleteComment')
  } catch (err) {
    next(err)
  }
}

exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('deleteArticleComment')
  } catch (err) {
    next(err)
  }
}

exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send('deleteArticleComment')
  } catch (err) {
    next(err)
  }
}
