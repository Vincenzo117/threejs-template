import * as THREE from 'three'
import Experience from '../Experience.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color:'blue', wireframe: true})
        )
        this.scene.add(this.testMesh)
        
    }  

    update() 
    {
        this.testMesh.rotation.y += 0.1
    }
}