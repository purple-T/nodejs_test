const Router = require('koa-router')
const router = new Router()

router.get('/v1/book/latest',(ctx,next)=>{
    ctx.body = { key:'book',id:"23",book_url:'http://www.baidu.com'}
})


module.exports = router