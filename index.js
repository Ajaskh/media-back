
// import json server using require method

const jsonServer = require('json-server')

// create server

const server = jsonServer.create()


const router = jsonServer.router('db.json')

// create middleware

const middleWare = jsonServer.defaults()


// set port for server

const PORT = process.env.PORT||4000


// use middleware in server

server.use(middleWare)

server.use(router)


// to work server

server.listen(PORT,()=>{
    console.log('media player server started at port :'+PORT);
})
