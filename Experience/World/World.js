import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ color:'blue' })
        )
        this.scene.add(this.testMesh)

        // Setup
        this.environment = new Environment()
    }  

    update() 
    {
        this.testMesh.rotation.y += 0.1
    }
}