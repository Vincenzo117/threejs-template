import Experience from '../Experience.js'
import Environment from './Environment.js'
import Cube from './Cube.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources loading
        this.resources.on('ready', () =>
        {
            // Setup
            this.cube = new Cube()
            this.environment = new Environment()
        })
    }  
}