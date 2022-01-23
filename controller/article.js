const { Article, User } = require('../model')

exports.getArticles = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0, tag, author } = req.query
    const filter = {}

    if (tag) {
      filter.tagList = tag
    }

    if (author) {
      const user = await User.findOne({ username: author })
      filter.author = user ? user._id : null
    }

    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
      .sort({
        // -1 倒序 1正序
        createdAt: -1
      })
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
    const article = req.article
    const bodyArticle = req.body.article || {}
    article.title = bodyArticle.title || article.title
    article.description = bodyArticle.description || article.description
    article.body = bodyArticle.body || article.body
    article.updatedAt = Date.now()
    await article.save()
    res.status(201).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article
    await article.remove()
    res.status(204).end()
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
