# TapBackend

Para poder testear la Api, tendran que usar Postman , o el Thunder de visual code, o similares. 

Importar estos curls:


  curl --location --request GET 'https://tapbackendtest.herokuapp.com/api/game/6250754af4e43eefcf75df63' 
  
  Este endpoint es para poder testear el endpoint GET donde pasamos un id de "game" y debe respondernos la siguiente estructura:
  
  {
    "game": {
    "id": "M67REZ8NPWJ7W7G94KVGOP",
    "created": "2022-03-22T17:18:26.259101-03:00",
    "state": {
    "code": "1",
    "description": "CREATED"
    }
    },
    "cells": []
  }
  
  
  ////////////////////////////////////////////////////////////////////////////////////////
  
  curl --location --request POST 'https://tapbackendtest.herokuapp.com/api/game/saveGame' \
--header 'Content-Type: application/json' \
--data-raw '{
    "game":{
        "state":{
            "code": "3"
        }
    },
    "cells":[]
}'

Este otro curl, trae un endpoint el cual sirve para registrar una nueva partida, solo basta con pasar el "Code" ..
///////////////////////////////////////////////////////////////////////////////////////

No se realizaron test unitarios , intente hacerlo con mocha y chai, pero no pude terminar de implementarlo.
  
