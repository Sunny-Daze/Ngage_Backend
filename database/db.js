import mongoose from "mongoose";

const ConnectDB = async (USER_NAME, USER_PASSWORD) => {
    const URI = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@ngage.icmawk9.mongodb.net/Ngage?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URI, { useUnifiedTopology:true, useNewURLParser:true });
        console.log("Database connected successfully!");
    } catch(e) {
        console.log("Error connecting to the database", e);
    }
}

export default ConnectDB;
