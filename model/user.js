const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    set: value => md5(value),
    select: false // 查询时不会展示
  },
  email: {
    required: true,
    type: String,
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
})

module.exports = userSchema
