
const express = require('express')
const cors = require('cors')
const {dbConection} = require('./../database/connect')

//creamos un modelo de server donde colocamos todo lo que necesitamos en el servidor
class Server {
    /* instanciamos el constructor y ahi llamamos puerto, app de express,
    path de rutas y las funciones que debe ejecutar el server. */
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000
        this.gamePath = '/api/game'
        this.conectarDb()
        this.middlewares()
        this.routes()
    }
    async conectarDb(){
        await dbConection()
    }
    //funcion para las rutas
    routes(){
        this.app.use(this.gamePath, require('./../routes/index'))

        
    }
    //funcion para middlewares
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    //server listen
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('corriendo en puerto', this.port)
        })
    }
}

module.exports = Server