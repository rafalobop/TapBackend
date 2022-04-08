const {Router}  =  require('express')
const router = Router()
const {check} = require('express-validator')
const {getGame, saveGame} = require('./../controllers/game')
const {validarCampos} = require('./../middlewares/validarCampos')

router.get('/:id', getGame)


router.post('/saveGame',[
    validarCampos
] ,saveGame)

module.exports = router