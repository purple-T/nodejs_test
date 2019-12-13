const Koa = require('koa')
const Router = require('koa-router')

const book = require('./api/v1/book')
const classic = require('./api/v1/classic')

const app = new Koa()
const router = new Router()


// router.get('/classic/latest',(ctx,next)=>{
//     ctx.body = {key:"classic"}
//     // ctx.body = {aa:'hah'}
// })

// app.use(router.routes())
app.use(book.routes())
app.use(classic.routes())


// app.use(async(ctx,next)=>{

//     console.log(ctx.path);
//     console.log(ctx.method);
    


// })


module.exports = {
    router

}

app.listen(3000)