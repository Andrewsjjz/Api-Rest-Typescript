import { connect } from "mongoose";
import "dotenv/config"

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export default dbConnect