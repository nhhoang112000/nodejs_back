const newRouter = require('./new')
const siteRouter = require('./site')
function route(app){
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })

    app.use('/new',newRouter)
    app.use('/',siteRouter)
      
      // app.get('/new', (req, res) => {
      //   res.render('new')
      // })
      // app.get('/search', (req, res) => {
      //   res.render('search')
      // })
      // app.post('/search', (req, res) => {
      //   console.log(req.body)
      //   res.render('search')
      // })
}

module.exports = route;