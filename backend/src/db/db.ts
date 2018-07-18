import { Pool, PoolConfig } from 'mysql';
import * as mysql from 'mysql';


const config: PoolConfig = {
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "password",
    database: "test_db"
};

export const my_sql: Pool = mysql.createPool(config);




