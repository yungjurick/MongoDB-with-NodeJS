require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const api = require('./api');

const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log(e);
  });
router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
