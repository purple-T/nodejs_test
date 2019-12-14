const Router = require('koa-router')
const router = new Router()

router.get('/v1/classic/latest',(ctx,next)=>{
    ctx.body = { key:'classic',classic_id:20}
})

module.exports = router