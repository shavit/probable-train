import Doc from './document'
import { Stage } from './game/stage'

export class GameDom extends Doc {
  constructor() {
    super()
    this.stage = new Stage(600, 400)
    this.render()
  }

  render(){
    this.innerHTML = null
    this.appendChild(this.stage.render())
  }
}
