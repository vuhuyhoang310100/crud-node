import express from "express";
import { user_route } from "./routes/user.route";
import dataSource from './database/db'
dataSource.initialize().then(result => {
    console.log('init db success');
}).catch((err) => {
    console.log('init db failed');
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/users",user_route)










app.listen(3002,()=>{
    console.log("app running on port 3002")
})