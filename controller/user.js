const { User } = require('../model')

exports.login = async (req, res, next) => {
  try {
    res.send('login')
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)
    await user.save()
    user = user.toJSON() // mongoose对象转成普通js对象
    Reflect.deleteProperty(user, 'password')
    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}

