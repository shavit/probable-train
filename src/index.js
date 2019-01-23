import './style.scss'
import Doc from './document'
import { GameDom } from './game'

const appDom = document.querySelector('game-object')
Doc.register('game-object', GameDom)
