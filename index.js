import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';
const PORT = 4000;

const app = express()
const DB_URL = 'mongodb+srv://slava:9182736456@cluster0.cis9gds.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use('/home', router);
app.use(express.static('public'));

const applicationStart = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('SERVER RUNNING ON', PORT)
        })
    } catch (error) {
        console.error(error)
    }
}

applicationStart()