import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter
{
    constructor() 
    {
        super()

        // Setup 
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    

        document.addEventListener('keyup', (event) => 
        {
            if(event.key === 'f')
            this.toggleFullscreen()
        })
    }

    toggleFullscreen()
    {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

        if (!fullscreenElement) 
        {
            if (document.body.requestFullscreen) 
            {
                document.body.requestFullscreen()
            }
            else if (document.body.webkitRequestFullscreen) 
            {
                document.body.webkitRequestFullscreen()
            }
        }
        else 
        {
            if (document.exitFullscreen) 
            {
                document.exitFullscreen()
            }
            else if (document.webkitExitFullscreen) 
            {
                document.webkitExitFullscreen()
            }
        }
    }
}