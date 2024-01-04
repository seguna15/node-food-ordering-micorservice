import mongoose from "mongoose";


export default async (DB_URI:string) => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`DB connected`)
    } catch (error) {
        console.log(`connection error: ${error}`);
        process.exit(1);
    }
}