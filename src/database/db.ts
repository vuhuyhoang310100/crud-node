import { DataSource } from "typeorm";
import * as path from 'path';
import { User } from "../entities/user";

const db = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:'',
    database:'nodejs-typeorm',
    entities:['src/entities/*.{js,ts}'],
    synchronize:true
})

export default db