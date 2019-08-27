const express = require('express')
const next = require('next')
const port = 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

// using next-route
const routes = require('./routes')
const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
    app.render(req, res, route.page, query)
})

const Main = async () => {
    await app.prepare()
    const server = express()
    server.use(handle)

    // port setting
    await server.listen(port, err => {
        if (err) throw err
        console.log(`Ready on http://localhost:${port}`)
    })
}

// Main program
Main()