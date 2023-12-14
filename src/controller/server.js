import express from 'express'
import cors from 'cors'
import { router } from '../controller/routes/routes.js'

const server = express();

server.use(express.json());

server.use(cors());

server.use(router);

export { server };