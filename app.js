const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

// 註冊 Handlebars 樣板引擎，並指定副檔名為 .hbs
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

// 設定使用 Handlebars 做為樣板引擎
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

module.exports = app
