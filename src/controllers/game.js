const Game = require('./../models/game')


const getGame = async (req, res) => {
    try {

        let id = req.params.id
        let game = await Game.findById(id)
        res.json({
            game
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Debe proporcionar un id valido'
        })
    }

}

const saveGame = async (req, res) => {
    try {

        let { game, cells } = req.body
        let { state } = game

        switch (state.code) {
            case '1':
                state.description = 'CREATED'
                break;
            case '2':
                state.description = 'WON'
                break;
            case '3':
                state.description = 'LOST'
                break;
        }
        const game_new = new Game({ game, state, cells })
        await game_new.save()

        res.json({
            msg: 'Partida creada exitosamente',
            game: game_new,
            cells
        })

    } catch (error) {
        console.log('err', error)
        console.log('EEEE', error.toString())
        return res.status(500).json({
            msg: `${error}`
        })
    }

}



module.exports = {
    getGame,
    saveGame
}