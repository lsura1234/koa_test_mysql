import Router from 'koa-router'
import user from '../db/model/user'

const router = new Router();


router.post('/', async(ctx, next) => {
    const {number,id } = ctx.request.body
     let data = await user.create({id,number});
    ctx.body = data
 });
 
 router.post('/select', async(ctx, next) => {
    // const {number } = ctx.request.body
     let data = await user.findAll();
    ctx.body = data
 });



 module.exports = router;

