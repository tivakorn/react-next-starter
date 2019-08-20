const routes = module.exports = require('next-routes')()

routes
    .add({ pattern: '/newtissue', page: 'newTissue' })
    .add({ pattern: '/', page: 'index' })
    .add({ pattern: '(.*)', page: 'notfound' })
