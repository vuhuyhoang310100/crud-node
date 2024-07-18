import express from "express";
import { user_route } from "./routes/user.route";
import dataSource from './database/db'
import { post_route } from "./routes/post.route";
import { auth_route } from "./routes/auth.route";
import { IsAuthenticated } from "./middleware/isAuthenticated";
import {} from "./type/types.d"
dataSource.initialize().then(result => {
    console.log('init db success');
}).catch((err) => {
    console.log('init db failed');
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/",auth_route)
app.use(IsAuthenticated)

app.use("/api/users",user_route)
app.use("/api/posts",post_route)











app.listen(3002,()=>{
    console.log("app running on port 3002")
})