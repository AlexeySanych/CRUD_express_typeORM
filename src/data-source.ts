import { DataSource } from "typeorm";
import * as path from "path";
import {User} from "./User";

const databasePath = path.join(__dirname, "usersdatabase.db");

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: databasePath,
    //synchronize: true,
    entities: [User],
});

export const initDataSource = async () => {
    await AppDataSource.initialize();
}

initDataSource().catch((error) => {
    console.log(error);
})