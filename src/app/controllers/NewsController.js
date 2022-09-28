class NewsController{
    //[GET] /new
    index(req,res){
        res.render('new') 
    }
    //[GET] /new/:slug
    show(req,res){
        res.send('hello')
    }
}

module.exports =  new NewsController;