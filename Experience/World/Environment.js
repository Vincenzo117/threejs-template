import * as THREE from 'three'
import Experience from '../Experience'

export default class Environment 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setAmbientLight()
        this.setEnvironmentMap()
    }

    setAmbientLight()
    {
        this.ambientLight = new THREE.AmbientLight( 0xffffff, 0.5)
        this.scene.add(this.ambientLight)
    }

    setEnvironmentMap()
    {
        // EnvironmentMap setup
    }
}