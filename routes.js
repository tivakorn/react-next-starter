const routes = module.exports = require('next-routes')()

routes
    .add({ pattern: '/detail/:id', page: 'detail' })
    .add({ pattern: '/', page: 'index' })
    .add({ pattern: '(.*)', page: 'notfound' })
