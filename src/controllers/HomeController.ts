import { Request, Response } from 'express'

class HomeController {
  index (req: Request, res:Response) {
    res.json({
      controller: 'HomeController Works!',
      date: new Date()
    })
  }
}

export default new HomeController()
