import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Cube
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

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
        this.material = new THREE.MeshBasicMaterial({ 
            map: this.textures.color
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }
}