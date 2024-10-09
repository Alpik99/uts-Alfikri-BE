import express from 'express'
import "./models/index.js"
import bodyParser from 'body-parser'
import router from './Routes/routes.js'
import cors from "cors"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", router)

app.listen(3001, () => {
    console.log('server is running in http://localhost:3001')
})