const mongoose = require('mongoose')

// 连接mongodb
mongoose.connect('mongodb://localhost:27017/realworld')

const db = mongoose.connection

db.on('error', err => {
  console.log('Mongodb数据库连接失败', err)
})

db.on('open', () => {
  console.log('Mongodb数据库连接成功')
})

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article')),
}
