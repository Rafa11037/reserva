import { Router } from 'express'
import multer from  'multer'
import uploadConfig from './config/upload'
import SessionController from './controllers/SessionController'

const routes = new Router()

routes.post('/session', SessionController.store)

export default routes