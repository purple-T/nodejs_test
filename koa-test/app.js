const Koa = require('koa')
// const Router = require('koa-router')
// const requireDirectory = require('require-directory')

const InitManager = require('./core/init')

// const book = require('./app/api/v1/book')
// const classic = require('./app/api/v1/classic')

const app = new Koa()
// const router = new Router()


// router.get('/classic/latest',(ctx,next)=>{
//     ctx.body = {key:"classic"}
//     // ctx.body = {aa:'hah'}
// })
// requireDirectory(module,'./api',{
//     visit:whentlll
// })

// function whentlll(obj){
//     // console.log(obj);
//     if(obj instanceof Router){
//         app.use(obj.routes())
//     }
// }

InitManager.initCore(app)

// app.use(router.routes())
// app.use(book.routes())
// app.use(classic.routes())


// app.use(async(ctx,next)=>{

//     console.log(ctx.path);
//     console.log(ctx.method);
    


// })


// module.exports = {
//     router

// }

app.listen(3333)