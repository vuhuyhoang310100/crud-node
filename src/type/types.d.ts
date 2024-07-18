import { User } from "../entities/user";
export {};
declare global {
    namespace Express{
        interface Request{
            user_data?: User;
        }
    }
}