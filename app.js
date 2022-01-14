const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

const app = express()

const port = process.env.PORT || 3000

app.use(morgan('dev')) // 日志
app.use(cors()) // 跨域

app.use(express.json())
// app.use(express.urlencoded())

app.use('/api', router)

// 挂载处理错误中间件
app.use(errorHandler())

app.listen(port, () => {
  console.log(`server runnning at http://localhost:${port}`)
})
