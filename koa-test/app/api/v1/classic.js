const Router = require('koa-router')
const router = new Router()

router.get('/v1/classic/latest',(ctx,next)=>{
    //获取‘v1/:id’/classic/latest中的id的值
    const path = ctx.params
    // 获取query的参数
    const query = ctx.request.query
    // header参数
    const headers = ctx.request.header
    //body参数
    const body = ctx.request.body

    ctx.body = { key:'classic',classic_id:20}
})

module.exports = router