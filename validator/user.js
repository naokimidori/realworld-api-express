const { body } = require('express-validator')
const validate = require('../middleware/validate')
const { User } = require('../model')
const md5 = require('../util/md5')

exports.register = validate([
  body('user.username')
    .notEmpty()
    .withMessage('用户名不能为空')
    .bail()
    .custom(async username => {
      const user = await User.findOne({ username })
      if (user) {
        return Promise.reject(`${username} 昵称已存在`)
      }
    }),

  body('user.password').notEmpty().withMessage('密码不能为空'),

  body('user.email')
    .notEmpty()
    .withMessage('邮箱不能为空')
    .isEmail()
    .withMessage('邮箱格式不正确')
    .bail()
    .custom(async email => {
      const user = await User.findOne({ email })
      if (user) {
        return Promise.reject(`${email} 邮箱已被注册`)
      }
    }),
])

exports.login = [
  validate([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空'),
  ]),
  validate([
    body('user.email').custom(async (email, { req }) => {
      const user = await User.findOne({ email })
        .select(['password', 'email', 'username', 'bio', 'image'])
      if (!user) {
        return Promise.reject('用户不存在')
      }
      // 将user对象挂载到req对象中，后续中间件即可直接使用
      req.user = user
    }),
  ]),
  validate([
    body('user.password').custom(async (password, { req }) => {
      if (md5(password) !== req.user.password) {
        return Promise.reject('密码错误')
      }
    }),
  ]),
]
