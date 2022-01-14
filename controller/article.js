exports.getArticles = async (req, res, next) => {
  try {
    res.send('getArticles')
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
    res.send('getArticle')
  } catch (err) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    res.send('createArticle')
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
