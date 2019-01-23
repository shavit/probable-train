import {
  Clock,
  CubeGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'

export class Stage {
  constructor(w, h){
    this.width = w
    this.height = h
    this.direction = 1

    this.__setStage()

    // Resize events
    window.addEventListener('resize', this.__onWindowResize, false)
  }

  __animate(){
    window.requestAnimationFrame(this.__animate.bind(this))
    let delta = this.clock.getDelta()
    this.mesh.rotation.x += delta * 0.5
    this.mesh.rotation.y += delta * 2

    this.mesh.position.x += this.direction * delta
    if (this.mesh.position.x > 2) {
      this.direction -= 1
    } else if (this.mesh.position.x < -2) {
      this.direction = 1
    }

    this.renderer.render(this.scene, this.scene.camera)
  }

  __setStage(){
    let renderer = new WebGLRenderer()
    renderer.setSize(this.width, this.height)
    this.renderer = renderer

    this.scene = new Scene()

    let geometry = new CubeGeometry(1, 1, 1)
    this.geometry = geometry

    let material = new MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    })
    this.material = material

    let mesh = new Mesh(geometry, material)
    this.mesh = mesh
    this.scene.add(mesh)

    let camera = new PerspectiveCamera(75, this.__displayRatio(), 0.1, 100)
    camera.position.set(0, 0, -3)
    camera.lookAt(mesh.position)
    this.scene.camera = camera

    this.clock = new Clock()
  }

  __onWindowResize(){
    // let wX = window.innerWidth / 2
    // let wY = window.innerHeight / 2
    this.camera.aspect = this.__displayRatio()
    camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  __displayRatio(){
    return window.innerWidth / window.innerHeight
  }

  render() {
    this.__animate()
    return this.renderer.domElement
  }
}
