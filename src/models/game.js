const {Schema, model} = require('mongoose')

//creamos el schema de usuario
const gameSchema = Schema({
    created:{
        type:Date, 
        default: Date.now(),
    },
    state:{
        code:{
            type: String,
            required:[true, "el codigo de partida es necesario"],
            unique:false,
            enum:["1","2","3"]
        },
        description:{
            type:String
        },
    },
   
})


module.exports = model('Game', gameSchema)
