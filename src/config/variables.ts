import dotenv from "dotenv";
dotenv.config();

const config = {
    RETAIL_DB_CONN_URI: process.env.RETAIL_DB_CONN_URI,
    SECRET_AUTH_KEY: process.env.SECRET_AUTH_KEY
}

export default config