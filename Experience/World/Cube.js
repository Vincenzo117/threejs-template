import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Cube
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Cube')
        }

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
    }

    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.cubeColorTexture
    }
    
    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({ 
            map: this.textures.color
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.mesh.position, 'x')
                .min(-2)
                .max(2)
                .step(0.01)
                .name('x position')
        }
    }
}