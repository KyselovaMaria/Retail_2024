import dotenv from "dotenv";
dotenv.config();

const config = {
    RETAIL_DB_CONN_URI: process.env.RETAIL_DB_CONN_URI
}

export default config