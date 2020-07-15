import express from 'express'
import cors from 'cors'
import HomeController from './controllers/HomeController'

class App {
    public express: express.Application

    constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private routes () {
      this.express.get('/', HomeController.index)
    }
}

export default new App().express
