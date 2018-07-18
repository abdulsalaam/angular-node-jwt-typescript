import { Pool, PoolConfig } from 'mysql';
import * as mysql from 'mysql';

// TODO change the host below to be obtained from environment variable
const config: PoolConfig = {
    connectionLimit: 5,
//    host: "localhost",
    host: "mysql",
    user: "root",
    password: "password",
    database: "test_db"
};

export const my_sql: Pool = mysql.createPool(config);




