const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

// 新增以下兩行，引入套件flash套件
const flash = require('connect-flash')
const session = require('express-session')
const SESSION_SECRET = 'secret' // 新增這行

// 註冊 Handlebars 樣板引擎，並指定副檔名為 .hbs
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

// 設定使用 Handlebars 做為樣板引擎
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true })) // body-parser解析controller的body方法
app.use(methodOverride('_method'))
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(flash()) // 掛載套件
app.use((req, res, next) => {
  console.log(res)
  res.locals.success_messages = req.flash('success_messages') // 設定 success_msg 訊息
  res.locals.error_messages = req.flash('error_messages') // 設定 warning_msg 訊息
  next()
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

module.exports = app
